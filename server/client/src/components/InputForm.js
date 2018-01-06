import React, {Component} from "react";
import {connect} from "react-redux";

import {addTodo} from "../actions";

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputTerm: ""
    }
  }

  inputChange(term) {
    this.setState((prevState, props) => ({inputTerm: term}))
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(() => ({inputTerm: ""}));
    this.props.addTodo(this.state.inputTerm);

  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" value={this.state.inputTerm} onChange={event => this.inputChange(event.target.value)}/>
        <button className="btn">+</button>
      </form>
    )
  }
}

export default connect(null, {addTodo})(InputForm);
