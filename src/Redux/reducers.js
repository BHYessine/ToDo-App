import { todoList } from "./data";
import {
  ACTION_MESSAGE,
  ADD_TODO,
  DELETE_TODO,
  DONE_TODO,
  MODE,
} from "./types";

const initialState = {
  todoList: todoList,
  msg: "",
  mode: "day",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };

    case DELETE_TODO:
      const deleteResult = state.todoList.filter((item) => item.id !== payload);
      return {
        ...state,
        todoList: [...deleteResult],
      };

    case DONE_TODO:
      const doneResult = state.todoList.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            isDone: true,
          };
        }
        return item;
      });
      return {
        ...state,
        todoList: [...doneResult],
      };

    case ACTION_MESSAGE:
      return {
        ...state,
        msg: payload,
      };

    case MODE:
      return {
        ...state,
        mode: payload,
      };

    default:
      return state;
  }
};

export default reducer;
