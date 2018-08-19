/**
 * @description index page
 * @author zyl
 * @createAt 2018/8/19
 */

import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

import Header from './header';

@inject('Login') @observer
export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.Login.fetchUser().then(resp => {
      Object.defineProperty(window, '_USER', { value: resp.data });
    });
  }

  render() {
    return (
      <div>
        <div>mobx demo</div>
        <Header {...this.props} />
      </div>
    )
  }
}
