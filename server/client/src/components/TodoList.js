import React, {Component} from "react";
import {connect} from "react-redux";

import {fetchTodos} from "../actions";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    console.log(this.props.todos);
    const todos = this.props.todos.data
    return this.props.todos.data ? this.props.todos.data.map(todo => <li key={todo._id}>{todo.name}</li>) : <li>Loading...</li>
  }

  render() {
    return(
      <ul>
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
