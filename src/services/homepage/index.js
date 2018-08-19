/**
 * @description homepage service
 * @author zyl
 * @createAt 2018/8/19
 */

import api from '../api'; 

class Homepage{
  getLogin(){
    return api.get('/api/getUser')
      .then(api.success)
      .catch(api.error);
  }
}

export default new Homepage();