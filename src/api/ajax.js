/**
 * ajax请求函数模块
 * 返回值是:promise对象
 * 数据:response.data
 */
import axios from 'axios'
export default function ajax({url='',data={},type="GET"}){
  return new Promise((resovle,reject)=>{
    let promise=''
    if (type==='GET') {
      let PathString=''
      Object.keys(data).forEach(key=>{
        PathString+=`${key}=${data[key]}&`
      })
      if (!PathString) {
        PathString=PathString.substring(0,PathString.length-1)
      url=url+'?'+PathString
      }
      promise=axios.get(url)
    }
    else{
      // axios返回的是promise对象
      promise=axios.post(url,data)
    }
    promise.then(res=>{
      resovle(res.data)
    }).catch(err=>{
      reject(err)
    })
    
  })
}