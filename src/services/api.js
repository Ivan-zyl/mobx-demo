import axios from 'axios';

let api = axios.create({
  timeout: 60000,
  // transformRequest: [(data) => JSON.stringify(data)]
});

api.interceptors.response.use(function(response) {
  let respData = response.data;
  if(respData.code === 200){
    return respData;
  }else if (respData.code === 401) {
    let i = respData.data.url.indexOf('BACK_URL=');
    location.href = respData.data.url.slice(0, i) + 'BACK_URL=' + encodeURIComponent(window.location.href);
  }
  return Promise.reject(respData);
}, function(error) {
  return Promise.reject(error);
});

api.__proto__.success = function(resp) {
  if (resp.code === 200) { //200xx表示请求成功
    return resp;
  } else {
    return Promise.reject(resp);
  }
}

api.__proto__.error = function(error) {
  return Promise.reject(error);
}

export default api;
