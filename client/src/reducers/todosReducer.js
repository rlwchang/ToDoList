import {FETCH_TODOS, ADD_TODO, DELETE_TODO} from "../actions";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload.data;
    case ADD_TODO:
      return [...state, action.payload.data];
    case DELETE_TODO:
    console.log(state.filter(todo => todo._id !== action.payload));
      return state.filter(todo => todo._id !== action.payload);
    default:
      return state;
  }
}

export default todosReducer
