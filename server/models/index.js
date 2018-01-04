const mongoose = require('mongoose');

const TodoDB = require('./todo');

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost/todo-api";
mongoose.connect(DATABASE_URL, {useMongoClient: true});
mongoose.Promise = Promise;

exports.Todo = TodoDB; 
