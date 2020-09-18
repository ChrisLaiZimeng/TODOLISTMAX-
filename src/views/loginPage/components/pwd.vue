<template>
  <div id="pwd">
    <div>
      <div class="part">
        <div class="txt">
          <p>手</p>
          <p>机</p>
          <p>号</p>
          <p>:</p>
        </div>
        <input type="text" v-model="number"/>
        <p @click="goToRegister" class="warning">{{warnNumber}}</p>
      </div>
      <div class="part">
        <div class="txt">
          <p>密</p>
          <p>码</p>
          <p>:</p>
        </div>
        <input type="password" v-model="pwdNumber"/>
        <p class="warning">{{wrongPwd}}</p>
      </div>
      <div id="login" class="part">
        <button @click="_isRight()">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../../api/index.js'
export default {
  name: 'pwd',
  data () {
    return {
      number: '',
      pwdNumber: '',
      wrongPwd: '',
      warnNumber: '',
      regi: false
    }
  },
  mounted () {
    if (sessionStorage.getItem('account')) {
      this.number = sessionStorage.getItem('account')
    }
  },
  watch: {
    pwdNumber () {
      this.wrongPwd = ''
    },
    number (val) {
      let reg = /^1[345678]\d{9}$/
      let check = reg.test(val)
      if (check || this.number.length === 0) {
        if (this.number.length === 11) {
          this._registered()
          setTimeout(() => {}, 5000)
          if (!this.regi) {
            let warning = document.getElementsByClassName('warning')[0]
            warning.onmouseover = function () {
              warning.style.cursor = 'pointer'
              warning.style.color = 'gainsboro'
            }
            warning.onmouseout = function () {
              warning.style.cursor = ''
              warning.style.color = ''
            }
            this.warnNumber = '账号未注册, 前往使用验证码注册并登录'
          }
          this.warnNumber = ''
        }
      } else {
        this.warnNumber = '请输入正确的手机号码'
      }
    }
  },
  methods: {
    _isRight () {
      if (!this.regi) {
        return
      }
      api.phoneLoginFn(this.number, this.pwdNumber)
        .then(response => {
          // console.log(response)
          if (response.data.code === 200) {
            console.log('登录成功')
            sessionStorage.setItem('account', this.number)
            // console.log(response.data.profile.nickname)
            sessionStorage.setItem('nickName', response.data.profile.nickname)
            this.success()
          } else {
            this.wrongPwd = '密码错误'
          }
        })
        .catch(error => {
          if (error) {
            console.log('error!')
          }
        })
    },
    success () {
      this.$router.push('/taskList')
      this.$store.state.login = true
    },
    _registered () {
      api.phoneRegisteredFn(this.number)
        .then(response => {
          // console.log(response)
          if (response.data.exist === 1) {
            this.regi = true
          } else if (response.data.exist === -1) {
            this.regi = false
          }
        })
    },
    goToRegister () {
      if (this.warnNumber === '账号未注册, 前往使用验证码注册并登录') {
        this.$router.push('phone')
      }
    }
  }
}
</script>

<style scoped>
  #pwd{
    margin: 0;
    padding: 0;
    background-color: #7ed48b;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
  }
  .txt{
    width: 4.8em;
    display: flex;
    justify-content: space-between;
  }
  .warning{
    color: red;
  }
  p{
    margin: .2em 0;
  }
  input{
    border: none;
    border-radius: 6px;
    padding: .4em .6em;
    width: 75vw;
    outline: none;
  }
  .changePage{
    color: gainsboro;
    cursor: pointer;
  }
  .part{
    margin: 1.5em 0 0 0;
  }
  #login{
    display: flex;
    justify-content: center;
  }
  #login button{
    border: none;
    background-color: white;
    padding: .5em 2em;
    border-radius: 7px;
  }
</style>
