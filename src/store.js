import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo";
import boardReducer from "./slices/board";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    board: boardReducer,
  },
});
