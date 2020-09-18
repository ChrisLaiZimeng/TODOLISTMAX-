<template>
  <div id="toDoList" class="list-group">
    <ul v-if="showNoTask">
      <li class="list-group-item strCenter">
        <input class="quickInput" v-model="inputContent" type="text" placeholder="加入代办事项" v-on:keyup.enter="quickAddOne(inputContent)"/>
      </li>
      <li class="list-group-item">没有事项</li>
    </ul>
    <ul v-else>
      <li class="list-group-item strCenter">
        <input class="quickInput" v-model="inputContent" type="text" placeholder="加入代办事项" v-on:keyup.enter="quickAddOne()"/>
      </li>
      <li class="list-group-item strCenter taskItem" v-for="(item, index) in tasks" :key="index" @click="finishOne(index)">
        <input type="checkbox" :checked="item.finished"/>
        &nbsp;&nbsp;
        {{item.content}}
        <span class="glyphicon glyphicon-minus" @click="deleteOne(index),finishOne(index)"></span>
        <span class="glyphicon glyphicon-chevron-up" @click="upOrDown([index,true]),finishOne(index)"></span>
        <span class="glyphicon glyphicon-chevron-down" @click="upOrDown([index,false]),finishOne(index)"></span>
      </li>
      <li class="list-group-item strCenter">
        <input type="checkbox" :checked="finishedAll" @click="checkAllNot()"/>
        &nbsp;
        已完成 {{finishedCount}} 个 / 共 {{tasks.length}} 个
        <button class="clearall" @click="deleteAll">删除全部</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import storageUtils from '../../../utils/storageUtil.js'
export default {
  name: 'toDoList',
  data () {
    return {
      inputContent: ''
    }
  },
  mounted () {
    let count = 0
    this.$store.state.tasks.forEach(function (value) {
      if (value.finished === true) {
        count++
      }
    })
    this.$store.state.finishedCount = count
  },
  computed: {
    ...mapState(['tasks', 'finishedCount']),
    showNoTask () {
      if (this.$store.state.tasks.length === 0) {
        return true
      }
    },
    finishedAll () {
      return this.$store.state.finishedCount === this.$store.state.tasks.length
    }
  },
  methods: {
    ...mapActions(['deleteOne', 'finishOne', 'checkAllNot', 'upOrDown', 'deleteAll']),
    // clear () {
    //   storageUtils.clearTasks()
    // },
    quickAddOne () {
      this.$store.dispatch('quickAddOne', this.inputContent)
      this.inputContent = ''
    },
    showAddList () {
      this.$store.state.addList = !this.$store.state.addList
    }
  },
  watch: {
    tasks: {
      deep: true,
      handler: storageUtils.saveTasks
    }
  }
}
</script>

<style scoped>
  .taskItem:hover{
    background-color: gainsboro;
    cursor: pointer;
  }
  .taskItem input:hover,.stastic input:hover {
    cursor: pointer;
  }
  #toDoList {
    font-size: 1.1em;
    display: flex;
    justify-content: center;
  }
  .list-group{
    margin: 0;
    padding: 0;
  }
  .quickInput {
    width: 100%;
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
  .clearall {
    border: none;
    border-radius: 7px;
    background-color: #c1d3c1;
    position: relative;
    left: 2em;
  }
</style>
