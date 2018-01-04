import React, {Component} from "react";
import ReactDOM from "react-dom";

import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}

export default App;
