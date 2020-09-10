export default{
  addTask (state, {task}) {
    state.tasks.unshift(task)
  },
  deleteTask (state, {index}) {
    state.tasks.splice(index, 1)
  },
  changeState (state, {index}) {
    state.tasks[index].finished = !state.tasks[index].finished
  },
  updateFinishedCount (state) {
    let counting = 0
    state.tasks.forEach(function (value) {
      if (value.finished === true) {
        counting++
      }
    })
    state.finishedCount = counting
  },
  changeAllState (state) {
    state.tasks.forEach(function (value) {
      value.finished = !value.finished
    })
  },
  changePos (state, {index, upDown}) {
    if (upDown && index !== 0) { // true为上移
      let tempContent = state.tasks[index].content
      let tempFinished = state.tasks[index].finished
      let tempDdl = state.tasks[index].ddl
      state.tasks[index].content = state.tasks[index - 1].content
      state.tasks[index].finished = state.tasks[index - 1].finished
      state.tasks[index].ddl = state.tasks[index - 1].ddl
      state.tasks[index - 1].content = tempContent
      state.tasks[index - 1].finished = tempFinished
      state.tasks[index - 1].ddl = tempDdl
    } else if (upDown === false && index !== (state.tasks.length - 1)) {
      let tempContent = state.tasks[index].content
      let tempFinished = state.tasks[index].finished
      let tempDdl = state.tasks[index].ddl
      state.tasks[index].content = state.tasks[index + 1].content
      state.tasks[index].finished = state.tasks[index + 1].finished
      state.tasks[index].ddl = state.tasks[index + 1].ddl
      state.tasks[index + 1].content = tempContent
      state.tasks[index + 1].finished = tempFinished
      state.tasks[index + 1].ddl = tempDdl
    }
  },
  clear (state) {
    state.tasks = []
  }
}
