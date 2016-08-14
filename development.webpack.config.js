var path = require('path');
var DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'client.js'),
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'lib'),
        publicPath: 'http://localhost:8080/'
    },
    plugins: [
      new webpack.HotModuleReplacmentPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    resolve: {
      extensions: ['', '.js']
    },
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ],
    plugins: [
      new DotenvPlugin({
        sample: './.env.default',
        path: './.env',
      }),
    ],
};
