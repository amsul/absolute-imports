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

##### On the client
Add the following to your Webpack congif:
```diff
resolve: {
  modules: [process.cwd(), 'node_modules'],
  alias: {
    'your-app-name': process.cwd(),
  }, 
},
```

##### On the server
`absolute-imports` needs to be executed once after you install the package, and each time you add or delete packages to your project. 
For one-time execution, run the following command:
```js
  node absolute-imports --name=your-app-name
```

In order to automate the process of executing the command each time you add or delete packages to your project, you can add the command as a `postInstall` script in your `package.json` file.
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
