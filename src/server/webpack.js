import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import devConfig from '../development.webpack.config';

var server = new WebpackDevServer(webpack(devConfig), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: { color: true },
});

server.listen(8080, 'localhost', () => {});
