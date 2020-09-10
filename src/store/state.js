import storageUtils from '../utils/storageUtil.js'
export default {
  // tasks: [{
  //   content: 'a',
  //   ddl: '',
  //   finished: false
  // }],
  tasks: storageUtils.readTasks(),
  finishedCount: 0
}
