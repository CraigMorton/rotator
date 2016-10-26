var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssImport = require('postcss-import');

config = {
  entry: "./app.js",
  output: {
    filename: "bundle.js",
    path: "build"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.css$/,loader: 'style-loader!css-loader!postcss-loader'}
    ]
  },
  postcss: function (webpack) {
      return [
          postcssImport({
              addDependencyTo: webpack
          }), precss, autoprefixer
      ];
  }
}

module.exports = config;