let tasks = JSON.parse(window.localStorage.getItem('tasks') || '[]')

export const getTasks = () => tasks

const saveTasks = () => {
  window.localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const createTask = (summary) => {
  tasks.push({ id: new Date().getTime(), summary, completed: false })
  saveTasks()
}

export const removeTask = id => {
  tasks = tasks.filter((task) => task.id != id)
  saveTasks()
}
