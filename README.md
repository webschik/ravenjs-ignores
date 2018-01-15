# ravenjs-ignores

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