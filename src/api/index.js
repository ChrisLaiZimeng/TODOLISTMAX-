import axios from 'axios'
import {
  phoneRegistered,
  sendVerify,
  verify,
  phoneLogin,
  loginStatus
} from './config.js'

export default{
  phoneRegisteredFn (phone) {
    return axios.get(phoneRegistered, {
      params: {
        phone
      }
    })
  },
  sendVerifyFn (phone) {
    return axios.get(sendVerify, {
      params: {
        phone
      }
    })
  },
  verifyFn (phone, captcha) {
    return axios.get(verify, {
      params: {
        phone,
        captcha
      }
    })
  },
  phoneLoginFn (phone, password) {
    return axios.get(phoneLogin, {
      params: {
        phone: phone || '',
        password: password || ''
      }
    })
  },
  loginStatusFn () {
    return axios.get(loginStatus)
  }
}
