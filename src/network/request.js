import axios from 'axios'

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/h3',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  },err => {
    return err
  })

  instance.interceptors.response.use(response => {
    return response.data
  },err => {
    return err
  })


  return instance(config);


}


