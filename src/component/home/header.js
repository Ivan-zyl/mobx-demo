/**
 * @description header page
 * @author zyl
 * @createAt 2018/8/19
 */

import React, { Component } from 'react';
import { observer } from "mobx-react";

@observer
export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  changeUsername = e => {
    this.props.home.changeUsername(e.target.value);
  }

  changePassword = e => {
    this.props.home.changePassword(e.target.value);
  }

  render() {
    const { username, password } = this.props.home;

    return (
      <div>
        <p><input value={username} onChange={this.changeUsername} /></p>
        <p><input value={password} onChange={this.changePassword} /></p>
        <div>username: {username}</div>
        <div>pwd: {password}</div>
      </div>
    )
  }
}
