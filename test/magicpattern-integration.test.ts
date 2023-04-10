import { MagicPatternIntegration } from '../src/magicpattern-integration';

describe('MagicPattern Integration', () => {
  it('shouldn not have data right after constructing', () => {
    const integration = new MagicPatternIntegration();
    expect(integration.data).toBeUndefined();
  });
});
