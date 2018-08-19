/**
 * @description 
 * @author zyl
 * @createAt 2018/8/19
 */

import { observable, action } from 'mobx';

import { HomepageService } from '../../services/index';

class LoginStore {
  @observable username: string = 'username';
  @observable password: string = 'pwd';

  constructor() {
    this.username = '';
    this.password = '';
  }

  @action async fetchUser() {
    const a = await HomepageService.getLogin();
    return Promise.resolve(a);
  }

  @action changeUsername = (value) => {
    this.username = value;
  }
  @action changePassword = (value) => {
    this.password = value;
  }
}

const loginStore = new LoginStore();

export default loginStore;
export { LoginStore };