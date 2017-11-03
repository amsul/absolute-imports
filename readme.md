# Absolute Imports

Import project assets using absolute paths from the project root.

So this&hellip;

```js
const dateUtil = require('../../../utils/date')
```

&hellip;becomes&hellip;

```js
const dateUtil = require('org-app/utils/date')
```

#### Support

Works with React Native and Node.

For web, you don't need this package. Simple add this to your Webpack config:

```diff
resolve: {
     // ...
+  modulesDirectories: ['', 'node_modules'],
},
```

## Install

```bash
yarn add absolute-imports
```

## Setup

The best way to set up is to add the script to the `postinstall` step - but feel free to move it around as you like.

```js
// package.json
{
  // ...
  "scripts" {
    // ...
    "postinstall": "node absolute-imports --prefix=org --project=app"
  },
}
```
