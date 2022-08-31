import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    description: "Task 1",
    isDone: false,
  },
  {
    id: 2,
    description: "Task 2",
    isDone: false,
  },
  {
    id: 3,
    description: "Task 3",
    isDone: false,
  },
];

const addReducer = createSlice({
  name: "task",

  initialState,

  reducers: {
    addTasks: (state, action) => {
      state.push(action.payload);
      return state;
    },

    removeTasks: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    editTasks: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            description: action.payload.task,
            isDone: false,
          };
        }
        return todo;
      });
    },

    completeTasks: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTasks, removeTasks, editTasks, completeTasks } =
  addReducer.actions;
export const reducer = addReducer.reducer;
