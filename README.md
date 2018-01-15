# ravenjs-ignores
[![npm](https://img.shields.io/npm/dm/ravenjs-ignores.svg)](https://www.npmjs.com/package/ravenjs-ignores)
[![npm](https://img.shields.io/npm/v/ravenjs-ignores.svg)](https://www.npmjs.com/package/ravenjs-ignores)
[![npm](https://img.shields.io/npm/l/ravenjs-ignores.svg)](https://www.npmjs.com/package/ravenjs-ignores)

> [Raven.js](https://github.com/getsentry/raven-js) ignore options for the common errors and URLs from 3rd party scripts

# Install

```shell
npm i ravenjs-ignores --save-dev
```

# Usage
```js

import ravenIgnores from 'ravenjs-ignores'; // {ignoreErrors: string[], ignoreUrls: RegExp[]}

// ...

Raven.config(YOUR_URL, Object.assign(YOUR_CONFIG, ravenIgnores));

```
