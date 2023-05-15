const TaskModel = require('../Models/TaskModel')
const db = require('../config')

class TaskController {
  static index(request, response) {
    response.render('index', {
      page_title: 'Todo | Index',
      title: "Page d'accueil",
      items: db,
    })
  }

  static create(request, response) {
    const { task } = request.body
    if (task && task.length > 0) {
      const task_model = new TaskModel(task)
      db.push(task_model)
      response.redirect('/tasks')
    }
  }

  static update(request, response) {}

  static remove(request, response) {}
}

module.exports = TaskController
