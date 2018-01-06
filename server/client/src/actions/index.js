import axios from "axios";

export const FETCH_TODOS = "FETCH_TODOS";
export function fetchTodos() {
  const request = axios.get("/api/todos");
  return {
    type: FETCH_TODOS,
    payload: request
  }
}

export const ADD_TODO = "ADD_TODO";
export function addTodo(todo) {
  const request = axios.post("/api/todos", {name: todo});
  return {
    type: ADD_TODO,
    payload: request
  }
}

export const UPDATE_TODO = "UPDATE_TODO";
export function updateTodo(id, todo, name) {
  const request = axios.put(`/api/todos/${id}`, {...todo, name});

  return {
    type: UPDATE_TODO,
    payload: null
  }
}

export const DELETE_TODO = "DELETE_TODO";
export function deleteTodo(id) {
  const request = axios.delete(`/api/todos/${id}`);

  return {
    type: DELETE_TODO,
    payload: id
  }
}
