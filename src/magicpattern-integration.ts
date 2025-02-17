import { MagicPatternConfig } from './types';

const DEFAULT_CONFIG: MagicPatternConfig = {
  url: 'https://magicpattern.design/integration',
  provider: 'Your Product Inc.',
  toolId: 'geometric-patterns',
  canSwitchTool: false,
  keepOpenAfterExport: false,
};

export class MagicPatternIntegration {
  data?: {
    config: MagicPatternConfig;
    resolve: (blob: Blob) => void;
    reject: (reason: any) => void;
    container?: HTMLDivElement;
    iframe?: HTMLIFrameElement;
  };

  constructor() {
    this.openMagicPattern = this.openMagicPattern.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.teardown = this.teardown.bind(this);
  }

  openMagicPattern(_config?: MagicPatternConfig) {
    return new Promise<Blob>((resolve, reject) => {
      if (this.data) {
        return;
      }

      this.data = {
        resolve,
        reject,
        config: Object.assign({}, DEFAULT_CONFIG, _config),
      };

      const container = document.createElement('div');
      container.className = '__magicpattern-container';

      const wrapper = document.createElement('div');
      wrapper.className = '__magicpattern-wrapper';

      const loadingSpinner = document.createElement('div');
      loadingSpinner.innerHTML =
        '<div><div></div><div class="double-bounce2"></div></div>';

      const iframe = document.createElement('iframe');
      iframe.id = 'magicpattern-iframe';
      iframe.src = `${this.data.config.url}?toolId=${this.data.config.toolId}`;

      wrapper.appendChild(loadingSpinner);
      wrapper.appendChild(iframe);
      container.appendChild(wrapper);

      window.addEventListener('message', this.onMessage);

      this.data.container = container;
      this.data.iframe = iframe;
      container.onclick = this.teardown;
      document.body.appendChild(container);
    });
  }

  private onMessage(event: MessageEvent) {
    if (!this.data) {
      return;
    }

    if (typeof event.data === 'object') {
      switch (event.data.type) {
        case 'magicpattern-loaded':
          this.data.iframe?.contentWindow?.postMessage(
            {
              type: 'magicpattern-setup',
              provider: this.data.config.provider,
              toolId: this.data.config.toolId,
              apiKey: this.data.config.apiKey,
              canSwitchTool: this.data.config.canSwitchTool,
              keepOpenAfterExport: this.data.config.keepOpenAfterExport,
              width: this.data.config.width,
              height: this.data.config.height,
              src: this.data.config.src,
            },
            '*'
          );
          break;
        case 'magicpattern-cancel':
          this.teardown();
          break;
        case 'magicpattern-image':
          const { type, ...rest } = event.data;
          this.data.resolve(rest);
          if (!this.data.config.keepOpenAfterExport)
            this.teardown();
          break;
        case 'magicpattern-error':
          console.error('MagicPattern reported an error: ', event.data.error);
          this.data.reject(event.data.error);
          this.teardown();
          break;
      }
    }
  }

  private teardown() {
    if (this.data?.container) {
      window.removeEventListener('message', this.onMessage);
      this.data.container.remove();
      delete this.data;
    }
  }
}
