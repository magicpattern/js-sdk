<a href="https://brandbird.app/?ref=github"><img src="/assets/header.png"/></a>

<div align="center">
  <img src="https://badgen.net/npm/v/@brandbird/integration" alt="Latest release" />
  <img src="https://badgen.net/bundlephobia/minzip/@brandbird/integration" alt="minzipped size"/>
</div>

<br />
<div align="center"><strong>The official library for integrating MagicPattern into your webapp.</strong></div>
<div align="center">Interested? Just hit us up at <a href="mailto:jim@magicpattern.design">jim@magicpattern.design</a></div>
<br />
<div align="center">
  <a href="https://magicpattern.design/">Website</a> 
  <span> · </span>
  <a href="https://twitter.com/magicpattern">Twitter</a>
</div>

<br />
<div align="center">
  <sub>Made by <a href="https://twitter.com/d__raptis">Jim Raptis</a> ✨</sub>
</div>
<br />

## Installation

#### With NPM

```sh
npm i @magicpattern/integration
```

#### With yarn

```sh
yarn add @magicpattern/integration
```

## Usage

> Be aware that we restrict the integration of MagicPattern by platforms at the moment. Are you interested? Hit me up at jim@magicpattern.design

```ts
import { openMagicPattern } from '@magicpattern/integration';

async function() {
  try {
    const blob = await openMagicPattern(
      {
        provider: "YOUR PRODUCT'S NAME", // The name of your own product
        toolId: "TOOL_ID_TO_OPEN", // Optional: input image to editor
        canChangeTool: false, // Optional: can the user choose a different tool
        width: 1200, // Optional
        height: 900, // Optional
      }
    );

    // do something with the blob, e.g. create an object url to show it in an img tag:
    // URL.createObjectURL(blob);
  } catch (error) {
    // error handling
  }
}
```

<!--
## Demo

1. [Demo for React.js](https://codesandbox.io/s/brandbird-integration-485un)
2. [Demo for vanilla JS](https://codesandbox.io/s/brandbird-integration-vanilla-js-eyvic) -->
