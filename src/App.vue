<template>
  <div id="app">
    <navComponent></navComponent>
    <subject></subject>
  </div>
</template>

<script>
import navComponent from './components/navComponent.vue'
import subject from './components/subject.vue'
export default {
  name: 'App',
  components: {
    navComponent,
    subject
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  min-width: 768px;
}
</style>
