var DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './scripts/updateSchemaJSON',
  ],
  output: {
    path: __dirname + '/bin',
    filename: 'updateSchemaJSON.js',
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
  ],

};
