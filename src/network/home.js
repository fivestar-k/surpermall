// 封装一个request函数，把页面中关于网络请求的操作都集中到这里，方便管理和维护
import {request} from './request'

// 导出一个封装的函数，这home组件里直接调用这个函数
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
