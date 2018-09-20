
import childProcess from 'child_process';

const serverObj = childProcess.spawn('./node_modules/.bin/babel-node', ['server.js']);

serverObj.stderr.on('data', (data) => {
  console.log(data.toString());
});

serverObj.stdout.on('data', (data) => {
  console.log(data.toString());
});

const frontObj = childProcess.spawn('./node_modules/.bin/webpack-dev-server', ['--config', './webpack.config.babel.js']);

frontObj.stderr.on('data', (data) => {
  console.log(data.toString());
});

frontObj.stdout.on('data', (data) => {
  console.log(data.toString());
});