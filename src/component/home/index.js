/**
 * @description index page
 * @author zyl
 * @createAt 2018/8/19
 */

import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

import Header from './header';

@inject('home') @observer
export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const resp = await this.props.home.fetchUser();
    this.props.home.changeAuthor(resp.data);
  }

  render() {
    
    const { author } = this.props.home;

    return (
      <div>
        <div>mobx demo</div>
        <div>author: {author}</div>
        <Header {...this.props} />
      </div>
    )
  }
}
