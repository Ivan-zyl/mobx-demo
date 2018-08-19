/**
 * @description router file
 * @author zyl
 * @createAt 2018/8/19
 */

import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { Provider } from 'mobx-react';

import * as stores from './stores';
import { title } from './config.json';
import { Home } from './component';

document.title = title;

function RouterConfig({ history }) {
  return (
    <Provider { ...stores}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default RouterConfig;