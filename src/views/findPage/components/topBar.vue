<template>
  <div id="topBar" class="container-fluid">
    <div class="box" @click="showBar()">
      <span class="glyphicon glyphicon-menu-hamburger"></span>
    </div>
    <div class="mid">ToDo任务表</div>
  </div>
</template>

<script>
export default {
  name: 'topBar',
  props: {
    showSideBar: Boolean,
    show: Function
  },
  methods: {
    showBar () {
      this.show()
    }
  }
}
</script>

<style scoped>
  #topBar{
    height: 5em;
    background-color: #d7fba6;
    display: flex;
    align-items: center;
    padding: 0;
  }
  .box{
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 2em;
    z-index: 2;
  }
  .box:hover{
    cursor: pointer;
  }
  .glyphicon {
    font-size: 2.5em;
  }
  .mid{
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    font-size: 1.5em;
  }
</style>
