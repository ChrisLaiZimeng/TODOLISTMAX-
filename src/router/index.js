import Vue from 'vue'
import Router from 'vue-router'

import toDoList from '../views/toDoList.vue'
import notFinished from '../views/notFinished.vue'
import finishedTask from '../views/finishedTask.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/toDoList',
      component: toDoList
    },
    {
      path: '/finishedTask',
      component: finishedTask
    },
    {
      path: '/notFinished',
      component: notFinished
    },
    {
      path: '/',
      redirect: '/toDoList'
    }
  ]
})
