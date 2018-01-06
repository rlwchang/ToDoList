import React, {Component} from "react";
import {connect} from "react-redux";

import dateformat from "dateformat";
import FontAwesome from "react-fontawesome";

import {deleteTodo, updateTodo} from "../actions";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: this.props.todo.name,
      prevTerm: this.props.todo.name,
      editOn: false
    }
  }

  onEditClick() {
    console.log("editing...");
    this.setState((prevState, props) => ({editOn: true}));
    this.todoInput.removeAttribute("disabled");
    console.log(this.todoInput);
    this.todoInput.focus();
  }

  onInputChange(term) {
    this.setState(() => ({term}));
  }

  onEnterPress(id, todo, event) {
    const key = event.which;
    const term = event.target.value

    if (key == 13) {
      this.props.updateTodo(id, todo, term);
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

  render() {
    const todo = this.props.todo;
    return(
      <li className="todos-list__item row" key={todo._id}>
      <div className="todos-list__item__col col-12" onDoubleClick={() => this.onEditClick()}>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          onBlur={event => this.onEditLeave(event)}
          onKeyPress={event => this.onEnterPress(todo._id, todo, event)}
          disabled={!this.state.editOn}
          ref={input => this.todoInput = input}
          />
      </div>
      <div className="todos-list__item__col col-4">
        <FontAwesome name="pencil" className="btn" onClick={() => this.onEditClick()}/>
        <FontAwesome name="search" className="btn" />
        <FontAwesome name="times" className="btn" onClick={() => this.props.deleteTodo(todo._id)} />
      </div>
      </li>
    )
  }
}

export default connect(null, {deleteTodo, updateTodo})(TodoItem)
