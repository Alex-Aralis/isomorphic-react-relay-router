var path = require('path');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'lib', 'client.js'),
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
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
};
