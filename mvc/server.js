const express = require('express')
const TaskController = require('./Controller/TaskController')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('views', 'mvc/Views')

app.get('/tasks', TaskController.index)
app.post('/tasks', TaskController.create)
app.put('/tasks', TaskController.update)
app.delete('/tasks', TaskController.remove)

app.listen(3000)
