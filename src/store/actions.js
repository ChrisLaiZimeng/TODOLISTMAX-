export default{
  quickAddOne ({commit}, content) {
    if (content === '') {
      alert('请输入文字内容!')
      return
    }
    let reg = /(\s)/g
    if (content.match(reg)) {
      if (content.match(reg).length === content.length) {
        alert('请输入文字内容!')
        return
      }
    }
    const task = {
      content: content,
      ddl: '',
      finished: false
    }
    commit('addTask', {task})
  },
  deleteOne ({commit}, index) {
    if (window.confirm('确定删除吗?')) {
      commit('deleteTask', {index})
      commit('updateFinishedCount')
    }
  },
  finishOne ({commit}, index) {
    commit('changeState', {index})
    commit('updateFinishedCount')
  },
  checkAllNot ({commit}) {
    commit('changeAllState')
    commit('updateFinishedCount')
  },
  upOrDown ({commit}, param) {
    const index = param[0]
    const upDown = param[1]
    commit('changePos', {index, upDown})
  },
  deleteAll ({commit}) {
    commit('clear')
    commit('updateFinishedCount')
  }
  // reqTask ({commit}) {
  //   setTimeout(() => {
  //     const tasks = storageUtil.readTasks()
  //     commit(recieveTasks, tasks)
  //   },500)
  // }
}
