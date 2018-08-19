/**
 * @description entry file
 * @author zyl
 * @createAt 2018/8/19
 */

import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import { title } from './config.json';
import RouterConfig from './router';


document.title = title;

ReactDOM.render(
  <RouterConfig history={createHistory()} />,
  document.getElementById('app')
);