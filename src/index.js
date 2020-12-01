import * as store from './store'

const taskList = document.querySelector('#task-list')
const addTask = document.querySelector('#add-task')

const renderTasks = () => {
  const tasks = store.getTasks()
  while (taskList.firstChild) {
    taskList.lastChild.remove()
  }
  taskList.append(...tasks.map(task => {
    const remove = document.createElement('span')
    remove.className = 'Task--action'
    remove.append('Delete')
    remove.addEventListener('click', removeTask)

    const li = document.createElement('li')
    li.id = task.id
    li.className = 'Task'
    li.append(task.summary, remove)
    return li
  }))
}

const removeTask = event => {
  store.removeTask(event.target.parentNode.id)
  renderTasks()
}

const handleNewTask = event => {
  event.preventDefault();
  const summary = addTask.elements['summary'].value

  store.createTask(summary)

  addTask.elements['summary'].value = ''

  renderTasks()
}

addTask.addEventListener('submit', handleNewTask)
window.addEventListener('load', renderTasks)
