var DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: [
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
  ],
};
