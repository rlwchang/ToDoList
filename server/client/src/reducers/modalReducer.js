import {SHOW_TODO, CLOSE_MODAL} from "../actions";

const modalReducer = (state = {modalOn: false}, action) => {
  switch(action.type) {
    case SHOW_TODO:
      return {
        todo: action.payload.data,
        modalOn: true
      };
      case CLOSE_MODAL:
        return {
          modalOn: false
        }
    default:
      return state;
  }

}

export default modalReducer;
