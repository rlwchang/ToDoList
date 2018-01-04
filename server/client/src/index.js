import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import Promise from "redux-promise";
import rootReducer from "./reducers";
import App from "./components/App";

const store = createStore(rootReducer ,applyMiddleware(Promise))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.querySelector("#root"));
