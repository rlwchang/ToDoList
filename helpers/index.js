const db = require('../models/');

exports.getTodos = (req, res) => {
    db.Todo.find()
      .then(todos => res.json(todos))
      .catch(err => console.log(err))
}

exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
      .then(todo => res.status(201).json(todo))
      .catch(err => console.log(err))
}
exports.showTodo = (req, res) => {
    db.Todo.findById(req.params.id)
      .then(todo => res.json(todo))
      .catch(err => console.log(err))
}
exports.updateTodo = (req, res) => {
    db.Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(todo => res.json(todo))
      .catch(err => console.log(err))
}
exports.deleteTodo = (req, res) => {
    db.Todo.findByIdAndRemove(req.params.id)
      .then(todo => res.json({message: "Todo was successfully deleted!"}))
      .catch(err => console.log(err))
}
