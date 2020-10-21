<!-- @format -->

# Webpack & Babel

[![N|Solid](https://media02.hongkiat.com/webpack-introduction/01-webpack-bundler.jpg)](https://webpack.js.org/)

Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging ...

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install package.

```sh
$ npm install
```

## Run web

For development

```bash
$ npm run server
```

For production

```bash
$ npm run build
```

## Usage

package.json

```javascript
"scripts": {
    "build": "node_modules/.bin/webpack --mode production",
    "serve": "webpack-dev-server --mode development"
  },
```

```javascript
// Convert to old version that can help us run every features on any browser
entry: './src/index.js', // "It is where you code"
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js' // "It is where you put into your web browser"
  },
```

```javascript
// Set the location where we can preview our web
devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },
```

## Contributing

Chear!!! Chinh :kissing_smiling_eyes: Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
