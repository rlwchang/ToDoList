import React, {Component} from "react";
import {connect} from "react-redux";

import dateformat from "dateformat";
import FontAwesome from "react-fontawesome";

import {deleteTodo, updateTodo, showTodo} from "../actions";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: this.props.todo.name,
      prevTerm: this.props.todo.name,
      editOn: false,
      completed: this.props.todo.completed
    }
  }

  onEditClick(event) {
    event.preventDefault();
    this.setState((prevState, props) => ({editOn: true}));
    this.todoInput.removeAttribute("disabled");
    this.todoInput.focus();
  }

  onInputChange(term) {
    this.setState(() => ({term}));
  }

  onEnterPress(id, todo, event) {
    const key = event.which;
    const term = event.target.value

    if (key == 13) {
      const newTodo = {...todo, name: term};
      this.props.updateTodo(id, todo, newTodo);
      this.setState(() => ({
        editOn: false,
        prevTerm: term
      }))
    }
  }

  onEditLeave() {
    this.setState(() => ({
      editOn: false,
      term: this.state.prevTerm
    }))
  }

  toggleCompletion(id, todo) {
    this.setState((prevState, props) => {
      const newTodo = {...todo, completed: !prevState.completed};
      this.props.updateTodo(id, todo, newTodo);
      return {completed: !prevState.completed}

    });
  }

  render() {
    const todo = this.props.todo;
    return(
      <li className="todos-list__item row clearfix" key={todo._id}>
      <div className="todos-list__item__col col-1 flex-container">
        <FontAwesome
          name={this.state.completed ? "check-square-o" : "square-o"}
          className="btn"
          onClick={() => this.toggleCompletion(todo._id, todo)}/>
      </div>
      <div className="todos-list__item__col col-11 flex-container" onClick={event => this.onEditClick(event)}>
        <input
          className={this.state.completed ? "todos-list__item--completed" : ""}
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          onBlur={event => this.onEditLeave(event)}
          onKeyPress={event => this.onEnterPress(todo._id, todo, event)}
          disabled={!this.state.editOn}
          ref={input => this.todoInput = input}
          />
      </div>
      <div className="todos-list__item__col col-4 flex-container flex-container--end">
        <FontAwesome name="pencil" className="btn btn--edit" onClick={() => this.onEditClick()}/>
        <FontAwesome name="search" className="btn btn--show" onClick={() => this.props.showTodo(todo._id)}/>
        <FontAwesome name="times" className="btn btn--delete" onClick={() => this.props.deleteTodo(todo._id)} />
      </div>
      </li>
    )
  }
}

export default connect(null, {deleteTodo, updateTodo, showTodo})(TodoItem)
