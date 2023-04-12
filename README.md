<a href="https://magicpattern.design/?ref=github"><img src="/assets/github-cover.jpg"/></a>

<div align="center">
  <img src="https://badgen.net/npm/v/@magicpattern/js-sdk" alt="Latest release" />
  <img src="https://badgen.net/bundlephobia/minzip/@magicpattern/js-sdk" alt="minzipped size"/>
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
npm i @magicpattern/js-sdk
```

#### With yarn

```sh
yarn add @magicpattern/js-sdk
```

## Usage

> Be aware that we restrict the integration of MagicPattern by platforms at the moment. Are you interested? Hit me up at jim@magicpattern.design

```ts
import { openMagicPattern } from '@magicpattern/js-sdk';

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

All the available `toolId` values are:

```
const toolIds = [
  "confetti-generator",
  "grid-patterns",
  "noise-generator",
  "blob-compositions",
  "geometric-patterns",
  "seamless-patterns",
  "blurry-gradients",
  "wave-generator",
  "css-patterns",
  "chart-generator",
  "mesh-gradients",
  "blob-generator",
  "doodle-backgrounds",
  "iphone-13-gradients",
];
```

## Demo

[Demo for React.js](https://codesandbox.io/s/magicpattern-integration-react-js-demo-d3nkih)

<!-- 2. [Demo for vanilla JS](https://codesandbox.io/s/brandbird-integration-vanilla-js-eyvic) -->
