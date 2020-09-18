<template>
  <div id="findPage" class="container-fluid">
    <top-bar :showSideBar="showSideBar" :show="show"></top-bar>
    <side-bar :showSideBar="showSideBar"></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import topBar from './components/topBar.vue'
import sideBar from './components/sideBar.vue'
export default {
  name: 'findPage',
  components: {
    topBar,
    sideBar
  },
  data () {
    return {
      showSideBar: false
    }
  },
  methods: {
    show () {
      this.showSideBar = !this.showSideBar
    }
  }
}
</script>

<style scoped>
  #findPage{
    background-color: #7ed48b;
    padding: 0;
  }
</style>
