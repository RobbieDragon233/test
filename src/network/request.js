import axios from 'axios'
import qs from 'qs'

function qsData(data) {
  return qs.stringify(data)
}

function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/aeaa327393087bce3c18304e17c51bd6/areaInfo',
    timeout: 5000,
  });

  //response拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error);
  });

  //3.发生网络请求
  return instance(config)
}

export default function(url, data, method) {
  return request({
    url: url,
    method: method,
    data: qsData(data)
  })
}