import axios from "axios";

export const FETCH_TODOS = "FETCH_TODOS";
export function fetchTodos() {
  const request = axios.get("/api/todos");
  return {
    type: FETCH_TODOS,
    payload: request
  }
}
