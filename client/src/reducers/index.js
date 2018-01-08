import {combineReducers} from "redux";

import todosReducer from "./todosReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  modal: modalReducer
});

export default rootReducer;
