import Vue from 'vue'
import Router from 'vue-router'

const loginPage = () => import('../views/loginPage/index')
const phone = () => import('../views/loginPage/components/phone')
const pwd = () => import('../views/loginPage/components/pwd')
const taskList = () => import('../views/taskList/index')
const toDoList = () => import('../views/taskList/components/toDoList')
const notFinished = () => import('../views/taskList/components/notFinished')
const finishedTask = () => import('../views/taskList/components/finishedTask')
const findPage = () => import('../views/findPage/index')

Vue.use(Router)
export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: findPage,
      redirect: '/findPage'
    }, {
      path: '/loginPage',
      component: loginPage
    }, {
      path: '/phone',
      component: phone
    }, {
      path: '/pwd',
      component: pwd
    }, {
      path: '/findPage',
      component: findPage,
      children: [
        {
          path: '/',
          component: taskList,
          redirect: '/taskList'
        }, {
          path: '/taskList',
          component: taskList,
          children: [
            {
              path: '/',
              component: toDoList,
              redirect: '/taskList/toDoList'
            },
            {
              path: '/taskList/toDoList',
              component: toDoList
            },
            {
              path: '/taskList/notFinished',
              component: notFinished
            },
            {
              path: '/taskList/finishedTask',
              component: finishedTask
            }
          ]
        }
      ]
    }
  ]
})
