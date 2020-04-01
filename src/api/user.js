import request from '@/utils/request'
const baseUrl = 'http://localhost:8089/ssmIntegration_war_exploded/'
export function login(data) {
  return request({
    url: `${baseUrl}login.do`,
    method: 'post',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    },
    data
  })
}

export function getInfo() {
  return request({
    url: `${baseUrl}getUserInfo.do`,
    method: 'post',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    }
  })
}

export function findAll(){
  return request({
    url:`${baseUrl}findAll.do`,
    method:'post'
  })
}
export function del(data){
  return request({
    url:`${baseUrl}delUser.do`,
    method:'post',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    },
    data
  })
}
