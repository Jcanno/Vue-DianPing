/* jshint esversion: 6 */
import axios from 'axios';
// import { getToken } from './util';
// import { TOKEN_KEY } from '@/libs/util';
// import Cookies from 'js-cookie';
// import { Spin } from 'iview'
class HttpRequest {
  constructor (baseURL) {
    this.baseUrl = baseURL
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
      }
    };
    return config;
  }
  distroy (url) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      // if (getToken()) {
      //   config.headers.Authorization = getToken(); // 设置验证头
      // }
      // this.queue[url] = true
      return config;
    }, error => {
      return Promise.reject(error);
    });
    // 响应拦截
    instance.interceptors.response.use(res => {  
      if (res.status !== 200 && res.status !== 201 && res.status !== 202 && res.status !== 204) {

    }
      return Promise.resolve(res)
    },error => {
      return Promise.reject(error);
    });
  }
  request (options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;
