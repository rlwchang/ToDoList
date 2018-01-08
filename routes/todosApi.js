const express = require('express');
const router = express.Router();

const helpers = require("../helpers");

router.route("/")
  .get(helpers.getTodos)
  .post(helpers.createTodo)

router.route("/:id")
  .get(helpers.showTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo)


module.exports = router;
