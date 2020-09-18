<template>
  <div id="loginPage">
    <div>
      <div id="btn" @click="goPhone">验证码登录</div>
      <div id="btn" @click="goPwd">账号密码登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  methods: {
    goPhone () {
      this.$router.push('/phone')
    },
    goPwd () {
      this.$router.push('/pwd')
    }
  }
}
</script>

<style scoped>
  #loginPage{
    margin: 0;
    padding: 0;
    background-color: #7ed48b;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #btn{
    background-color: white;
    border: 1px solid #1B6D85;
    border-radius: 8px;
    font-size: 1.2em;
    margin: 2em;
    padding: 1em;
    text-align: center;
  }
  #btn:hover{
    cursor: pointer;
  }
</style>
