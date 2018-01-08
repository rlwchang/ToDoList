import React, {Component} from "react";
import {connect} from "react-redux";

import dateformat from "dateformat"

import {closeModal} from "../actions";

class Modal extends Component {


  render() {
    const {todo} = this.props
    return (
      <div className="modal" onClick={() => this.props.closeModal()}>
      <div className="modal__content center clearfix" onClick={event => {event.stopPropagation()} }>

      <h2 className="center--text">Todo
        <span className="btn btn--close no-padding float--right" onClick={() => this.props.closeModal()}>X</span>
      </h2>
      <hr/>
      <p>{todo.name}</p>
      <hr/>
      <p className="float--left">Date Created: {dateformat(todo.createdDate)}</p>
      <p className="float--right">Completed: {todo.completed ? "Yes": "No"}</p>
      </div>
      </div>
    )
  }
}

export default connect(null, {closeModal})(Modal);
