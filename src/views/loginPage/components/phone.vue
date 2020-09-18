<template>
  <div id="phone">
    <div>
      <div class="part">
        <div class="txt">
          <p>手</p>
          <p>机</p>
          <p>号</p>
          <p>:</p>
        </div>
        <div class="getNumber">
          <input type="text" v-model="number"/>
          <button id="sendCode" @click="getCode()" :disabled="canSend">{{sendCode}}</button>
        </div>
        <p class="warning">{{warnNumber}}</p>
      </div>
      <div class="part">
        <div class="txt">
          <p>验</p>
          <p>证</p>
          <p>码</p>
          <p>:</p>
        </div>
        <input type="text" class="verify" v-model="verifyCode"/>
        <p class="warning">{{wrongCode}}</p>
      </div>
      <div id="login" class="part">
        <button @click="verify()">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../../api/index.js'
export default {
  name: 'phone',
  data () {
    return {
      number: '',
      verifyCode: '',
      wrongCode: '',
      regi: false,
      warnNumber: '',
      sendCode: '获取验证码',
      canSend: false
    }
  },
  mounted () {
    if (sessionStorage.getItem('account')) {
      this.number = sessionStorage.getItem('account')
    }
  },
  watch: {
    number (val) {
      let reg = /^1[345678]\d{9}$/
      let check = reg.test(val)
      if (check || this.number.length === 0) {
        if (this.number.length === 11) {
          this._registered()
          setTimeout(() => {}, 2000)
          if (!this.regi) {
            this.warnNumber = '账号未注册, 即将注册并登录'
          }
          this.warnNumber = ''
        }
      } else {
        this.warnNumber = '请输入正确的手机号码'
      }
    }
  },
  methods: {
    getCode () {
      api.sendVerifyFn(this.number)
        .then(response => {
          console.log('发送验证码')
        })
      let sec = 59
      this.canSend = true
      let id = setInterval(() => {
        this.sendCode = `${sec}s后重新发送`
        if (sec === 0) {
          clearInterval(id)
          this.canSend = false
          this.sendCode = '获取验证码'
        }
        sec--
      }, 1000)
    },
    verify () {
      api.verifyFn(this.number, this.verifyCode)
        .then(response => {
          if (response.data.code === 200) {
            console.log('验证成功')
            sessionStorage.setItem('account', this.number)
            sessionStorage.setItem('nickName', response.profile.nickname)
            this.success()
          } else {
            console.log('验证失败')
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
  #phone{
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
  .getNumber{
    background-color: white;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75vw;
    padding: 0 1vw 0 0;
  }
  .getNumber button{
    font-size: .8em;
    background-color: gainsboro;
    border: none;
    border-radius: 5px;
    padding: .2em 1em;
    width: 10em;
  }
  .verify{
    width: 75vw;
  }
  p{
    margin: .2em 0;
  }
  input{
    border: none;
    border-radius: 6px;
    padding: .4em .6em;
    outline: none;
    width: 8em;
  }
  .part{
    margin: 1.5em 0;
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
