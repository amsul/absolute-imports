# Absolute Imports

Import project assets using absolute paths from the project root.

Typically somewhere deep in your project you end up with something like this:

```js
const dateUtil = require('../../../utils/date')
```

With `absolute-imports`, you now do this:

```js
const dateUtil = require('your-app-name/utils/date')
```


#### Compatibility
Works with React Native and Node.

#### Instructions
```bash
yarn add absolute-imports
```

##### With React Native or Node
`absolute-imports` only needs to be run once. However, if you happen to clean your `node_modules`, it needs to run again.

For one-time execution, run the following command:
```js
node absolute-imports --name=your-app-name
```

To run the command each time you clean your `node_modules`, add it as a `postinstall` script:
```js
// package.json
{
  ...
  "scripts" {
    ...
    "postinstall": "node absolute-imports --name=your-app-name"
  },
}
```

##### With Webpack
This package isn't even needed for Webpack. Add the following to your Webpack config:
```js
resolve: {
  modules: [process.cwd(), 'node_modules'],
  alias: {
    'your-app-name': process.cwd(),
  }, 
},
```
