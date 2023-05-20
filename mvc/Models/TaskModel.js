class TaskModel {
  #name
  #completed = false

  constructor(name) {
    this.#name = name
  }

  get name() {
    return this.#name
  }
}

module.exports = TaskModel
