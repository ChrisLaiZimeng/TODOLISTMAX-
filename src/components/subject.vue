<template>
  <div id="subject" class="container-fluid">
    <div id="buttonBar" class="container-fluid">
      <router-link to="/toDoList" class="tag" :class="{choosed: activeTag0}" @click.native="changeTag(0)">所有事项</router-link>
      <router-link to="/notFinished" class="tag" :class="{choosed: activeTag1}" @click.native="changeTag(1)">代办事项</router-link>
      <router-link to="/finishedTask" class="tag" :class="{choosed: activeTag2}" @click.native="changeTag(2)">已完成事项</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'subject',
  data () {
    return {
      activeTag0: true,
      activeTag1: false,
      activeTag2: false
    }
  },
  methods: {
    changeTag (index) {
      switch (index) {
        case 0:
          this.activeTag0 = true
          this.activeTag1 = false
          this.activeTag2 = false
          break
        case 1:
          this.activeTag0 = false
          this.activeTag1 = true
          this.activeTag2 = false
          break
        case 2:
          this.activeTag0 = false
          this.activeTag1 = false
          this.activeTag2 = true
          break
      }
    }
  }
}
</script>

<style scoped>
  a {
    text-decoraction: none;
    color: black;
  }
  .router-link-acitve{
    text-decoration: none;
  }
  #subject {
    background-color: rgb(106, 163, 255);
    padding: 1em;
    min-height: 45em;
  }
  #buttonBar{
    display: flex;
    padding: 3% 0 0 12%;
  }
  .tag{
    border-radius: 8px 8px 0 0;
    border: 1px solid gainsboro;
    height: 3em;
    width: 20%;
    text-align: center;
    line-height: 3em;
    font-size: 1.2em;
    background-color: #0b60c3;
  }
  .choosed {
    background-color: #3e8bff;
  }
</style>
