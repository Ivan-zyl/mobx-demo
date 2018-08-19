/**
 * @description server
 * @author zyl
 * @createAt 2018/8/19
 */

import http from 'http';
import url from 'url';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';
import open_browser from 'child_process';

import config from './webpack.config.babel';

/**
 * @description start back-end server
 */

http.createServer(function (request, response) {

  response.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8'
  });

  const _url = url.parse(request.url).pathname;

  switch (_url) {
    case '/api/getUser':
      let jsons = {
        code: 200,
        message: 'success',
        data: 'zyl'
      };
      jsons = JSON.stringify(jsons);
      response.write(jsons);
      response.end();
      break;
  }

}).listen(3000);
console.log('backend server at http://localhost:3000');

/**
 * @description start front-end server
 */

const dev_server_options = {
  contentBase: './dist',
  hot: true,
  proxy: {
    "/api": {
      "target": "http://localhost:3000"
    }
  },
  port: 8000,
  host: 'localhost',
}


WebpackDevServer.addDevServerEntrypoints(config, dev_server_options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, dev_server_options);

server.listen(dev_server_options.port, dev_server_options.host, () => {

  const url = `http://${dev_server_options.host}:${dev_server_options.port}`
  let cmd = '';
  switch (process.platform) {
    case 'wind32':
      cmd = 'start';
      break;

    case 'linux':
      cmd = 'xdg-open';
      break;

    case 'darwin':
      cmd = 'open';
      break;
  }

  open_browser.exec(`${cmd} ${url}`);

  console.log(`frontend server at http://${dev_server_options.host}:${dev_server_options.port}`);

});
