import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo";
import boardReducer from "./slices/board";
import messageReducer from "./slices/message";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    board: boardReducer,
    message: messageReducer,
  },
});
