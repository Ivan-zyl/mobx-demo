/**
 * @description 
 * @author zyl
 * @createAt 2018/8/19
 */

import { observable, action, flow } from 'mobx';

import { HomeService } from '../../services/index';

class HomeStore {
  @observable username: string = 'username';
  @observable password: string = 'pwd';
  @observable author: string = '';

  constructor() {
    
  }

  fetchUser = flow(function * (){
    const resp = yield HomeService.getUser();
    return resp;
  })

  @action changeAuthor = (value) => {
    this.author = value;
  }

  @action changeUsername = (value) => {
    this.username = value;
  }

  @action changePassword = (value) => {
    this.password = value;
  }
}

export default new HomeStore();