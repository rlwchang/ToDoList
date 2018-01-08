import React, {Component} from "react";
import {connect} from "react-redux"

import Modal from "./Modal";
import InputForm from "./InputForm";
import TodoList from "./TodoList";
import Footer from "./Footer"

class App extends Component {
  render() {
    const {modalOn, todo} = this.props.modal;
    const modal = modalOn ? <Modal todo={todo}/> : ""

    return (
      <div id="app" className="mainWhite clearfix">
        {modal}
        <div className="wrapper--80">
        <h1 className="header--larger center--text no-margin--top"><span className="header--bold mainGreen--text">todo</span>List</h1>
        <InputForm />
        <TodoList />
        <Footer />
        </div>
      </div>
    )
  }
}

function mapStateToProps({modal}) {
  return {
    modal
  }
}

export default connect(mapStateToProps)(App);
