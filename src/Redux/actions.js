import {
  ACTION_MESSAGE,
  ADD_TODO,
  DELETE_TODO,
  DONE_TODO,
  MODE,
} from "./types";

export const addTodo = (todo) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TODO, payload: todo });
    dispatch({ type: ACTION_MESSAGE, payload: "Task Added Successfully." });
  } catch (error) {
    dispatch({ type: ACTION_MESSAGE, payload: error.message });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TODO, payload: id });
    dispatch({ type: ACTION_MESSAGE, payload: "Task Deleted Successfully." });
  } catch (error) {
    dispatch({ type: ACTION_MESSAGE, payload: error.message });
  }
};

export const doneTodo = (id) => async (dispatch) => {
  try {
    dispatch({ type: DONE_TODO, payload: id });
    dispatch({ type: ACTION_MESSAGE, payload: "Task Done Successfully." });
  } catch (error) {
    dispatch({ type: ACTION_MESSAGE, payload: error.message });
  }
};

export const changeMode = (mode) => async (dispatch) => {
  try {
    dispatch({ type: MODE, payload: mode });
    dispatch({ type: ACTION_MESSAGE, payload: "Theme Changed Successfully." });
  } catch (error) {
    dispatch({ type: ACTION_MESSAGE, payload: error.message });
  }
};

export const clearMsg = () => async (dispatch) => {
  try {
    dispatch({ type: ACTION_MESSAGE, payload: "" });
  } catch (error) {
    console.log(error);
  }
};
