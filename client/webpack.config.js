var autoprefixer = require('autoprefixer');

config = {
  entry: "./app.js",
  output: {
    filename: "bundle.js",
    path: "build"
  },
  devtool: 'source-map',
  module: { //NEW
    loaders: [
      { test: /\.css$/,loader: 'style-loader!css-loader!postcss-loader'}
    ]
  },
  postcss: function () { //NEW
    return [autoprefixer];
  }
}

module.exports = config;