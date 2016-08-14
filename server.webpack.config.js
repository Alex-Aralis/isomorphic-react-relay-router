var DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  target: 'node',
  entry: [
    './src/server',
  ],
  output: {
    path: __dirname + '/build',
    filename: 'server.js',
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
      {
        test:  /\.json$/,
        loader: 'json-loader',
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
