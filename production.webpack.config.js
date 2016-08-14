// var webpack = require('webpack');
var DotenvPlugin = require('webpack-dotenv-plugin');
var CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/client',
  ],
  output: {
    path: __dirname + '/build',
    filename: 'app.js',
  },
  resolve: {
    extension: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new DotenvPlugin({
      sample: './.env.default',
      path: './.env',
    }),
    new CopyPlugin([
      {
        from: './views',
        to: 'views',
      },
      {
        from: '.env',
      }
    ])
  ],

};
