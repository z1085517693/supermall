import axios from 'axios'
export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })
  //2 axiox的拦截器
  //请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    console.log(err);
  })
  //响应拦截
  instance.interceptors.response.use(config => {
    // console.log(config);
    return config.data
  }, err => {
    console.log(err);
  })
  //发送真正的网络请求
  return instance(config)
}