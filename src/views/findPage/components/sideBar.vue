<template>
  <div id="sideBar" class="container-fluid" :class="{aniDisppear: isDis, aniShow:isShow}">
    <div class="log" v-if="this.$store.state.login">
      <p>{{nickName}}</p>
    </div>
    <div class="log" v-else>
      <button @click="toLog()">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  data () {
    return {
      isDis: false,
      isShow: false,
      nickName: sessionStorage.getItem('nickName')
    }
  },
  props: {
    showSideBar: Boolean
  },
  watch: {
    showSideBar (value) {
      if (value) {
        this.isShow = true
        this.isDis = false
      } else {
        this.isShow = false
        this.isDis = true
      }
    }
  },
  methods: {
    toLog () {
      this.$router.push('/loginPage')
    }
  }
}
</script>

<style scoped>
#sideBar{
  padding: 0;
  margin-top: 1px;
  height: 100vh;
  width: 20em;
  z-index: 999;
  position: absolute;
  background-color: #d7fba6;
  left: -20em;
  /* left: 0em; */
  animation-duration: 1s;
  animation-fill-mode:forwards;
}
.aniShow{
  animation-name: show;
}
.aniDisppear{
  animation-name: disappear;
}
@keyframes disappear{
  from{
    left: 0;
  }
  to{
    left: -20em;
  }
}
@keyframes show{
  from{
    left: -20em;
  }
  to{
    left: 0;
  }
}
.log{
  height: 8em;
  margin: 1em;
  background-color: #f8fdf8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 1.2em;
  padding: .6em 2em;
}
.log button{
  border: none;
  padding: .6em 2em;
  background-color: #7ed48b;
  border-radius: 8px;
}
</style>
