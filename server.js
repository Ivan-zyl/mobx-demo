/**
 * @description server
 * @author zyl
 * @createAt 2018/8/19
 */

import http from 'http';
import url from 'url';
import path from 'path';

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
