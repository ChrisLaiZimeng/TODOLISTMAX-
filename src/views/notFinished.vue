<template>
  <div id="notFinished" class="list-group">
    <ul v-if="showNoTask">
      <li class="list-group-item">没有代办事项</li>
    </ul>
    <ul v-else>
      <li class="list-group-item strCenter taskItem" v-for="(item, index) in notFinishedTask" :key="index">
        &nbsp;&nbsp;
        {{item.content}}
      </li>
      <li class="list-group-item">
        &nbsp;
        共 {{tasks.length - finishedCount}} 个
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'finishedTasks',
  data () {
    return {
      inputContent: ''
    }
  },
  computed: {
    ...mapState(['tasks', 'finishedCount']),
    showNoTask () {
      return (this.$store.state.tasks.length - this.$store.state.finishedCount) === 0
    },
    notFinishedTask () {
      const showTasks = []
      this.$store.state.tasks.forEach(function (value) {
        if (value.finished === false) {
          showTasks.push(value)
        }
      })
      return showTasks
    }
  }
}
</script>

<style scoped>
  #notFinished {
    font-size: 1.1em;
    display: flex;
    justify-content: center;
  }
  .taskItem:hover{
    background-color: gainsboro;
    cursor: pointer;
  }
  .list-group{
    margin: 0;
    padding: 0;
  }
  .list-group-item{
    line-height: 1.5em;
  }
  .quickInput {
    width: 95%;
    height: 3em;
    padding: 1em;
  }
  ul {
    margin: 0;
    padding: 0;
    width: 80%;
    list-style: none;
  }
  .glyphicon:hover {
    cursor: pointer;
  }
  .glyphicon-plus {
    font-size: 2em;
  }
  .glyphicon-minus, .glyphicon-chevron-up, .glyphicon-chevron-down{
    font-size: 1.5em;
    position: absolute;
  }
  .glyphicon-minus{
    right: .5em;
    top: 0.5em;
  }
  .glyphicon-chevron-up{
    right: 2em;
    top: 0.5em;
  }
  .glyphicon-chevron-down{
    right: 3.5em;
    top: 0.5em;
  }
  .strCenter {
    display: flex;
    align-items: center;
  }
  .addIcon {
    margin: 0 1% 0 3%;
  }
</style>
