import React, {Component} from "react";

import InputForm from "./InputForm";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div id="app">
        <h1 className="header center--text"><span className="header--bold">todo</span>List</h1>
        <InputForm />
        <TodoList />
      </div>
    )
  }
}

export default App;
