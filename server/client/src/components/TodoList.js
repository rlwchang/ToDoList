import React, {Component} from "react";
import {connect} from "react-redux";

import dateformat from "dateformat";
import FontAwesome from "react-fontawesome";

import {fetchTodos, deleteTodo} from "../actions";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    const todos = this.props.todos;
    console.log(todos);
    if (todos) {
      return todos.map(
        todo => {
          return (
            <TodoItem key={todo._id} todo={todo} />
          )}
      )
    } else {
      return <div>Loading...</div>
    }
}

  render() {
    return(
      <ul className="no-padding--left">
      {this.renderTodos()}
      </ul>
    )
  }

}

function mapStateToProps({todos}) {
  return {
    todos
  }
}

export default connect(mapStateToProps, {fetchTodos})(TodoList)
