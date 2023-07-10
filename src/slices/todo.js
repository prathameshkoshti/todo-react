import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          id: action.payload.id,
          title: action.payload.title,
          isComplete: action.payload.isComplete,
        },
      ];
    },
    deleteTodo: (state) => {},
    completeTodo: (state, action) => {},
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
