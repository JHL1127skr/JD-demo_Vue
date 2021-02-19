import axios from "axios";
import nprogress from 'nprogress'
import { Notify } from "vant";
import "../../node_modules/nprogress/nprogress.css"
const instance = axios.create({
  baseURL: " http://localhost:3009", // ! 通用路径
  timeout: 5000,
});


// ! 全局拦截
// 全局请求拦截,所有的请求发起之前做
instance.interceptors.request.use(
  function (config) {
    nprogress.start()
    config.headers.authorization = "Bearer " + localStorage.getItem("token");
    // 你是封装这个地方全局的数据请求拦截,  所有的数据请求都会通过这个地方,默认自带了token  你多带一个 就是多余了.
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 全局相应拦截,所有的请求完成之后执行
instance.interceptors.response.use(
  function (response) {
    nprogress.done()
    // 可以对结果进行处理
    return response;
  },
  function (error) {
    if (error && error.message.indexOf("timeout") > -1) {
      Notify({ type: "warning", message: "网络超时啦,待会再试试吧~" });
    }
    nprogress.done()
    return Promise.reject(error);
  }
);

// get 请求
export const get = (url, params) => instance.get(url, { params });
// post 请求
export const post = (url, data) => instance.post(url, data);
// delete 请求
export const del = (url) => instance.delete(url);
// put 请求
export const put = (url, data) => instance.put(url, data);
