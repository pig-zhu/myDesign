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