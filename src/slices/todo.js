import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../api/client";
import { setMessage } from "./message";

export const fetchTodo = createAsyncThunk("todo/fetch", async (boardId) => {
  const response = await client.get(`todo/${boardId}`);
  return response.data;
});

export const createTodo = createAsyncThunk(
  "todo/create",
  async (params, { dispatch, getState }) => {
    const state = getState();
    const response = await client.post("todo", { ...params });
    dispatch(fetchTodo(state.todo.selectedBoard));
    dispatch(
      setMessage({
        type: response.success ? "success" : "error",
        message: response.message,
      }),
    );
    setTimeout(() => {
      dispatch(
        setMessage({
          type: "",
          message: "",
        }),
      );
    }, 2000);
    return response.data;
  },
);

export const completeTodo = createAsyncThunk(
  "todo/complete",
  async (id, { dispatch, getState }) => {
    const state = getState();
    const response = await client.patch(`todo/complete/${id}`);
    dispatch(fetchTodo(state.todo.selectedBoard));
    dispatch(
      setMessage({
        type: response.success ? "success" : "error",
        message: response.message,
      }),
    );
    setTimeout(() => {
      dispatch(
        setMessage({
          type: "",
          message: "",
        }),
      );
    }, 2000);
    return response.data;
  },
);

export const deleteTodo = createAsyncThunk(
  "todo/delete",
  async (id, { dispatch, getState }) => {
    const state = getState();
    const response = await client.delete(`todo/${id}`);
    dispatch(fetchTodo(state.todo.selectedBoard));
    dispatch(
      setMessage({
        type: response.success ? "success" : "error",
        message: response.message,
      }),
    );
    setTimeout(() => {
      dispatch(
        setMessage({
          type: "",
          message: "",
        }),
      );
    }, 2000);
    return response.data;
  },
);

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
    selectedBoard: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTodo.pending]: (state) => {
      state.loading = true;
    },
    [fetchTodo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.list = payload.todo;
      state.selectedBoard = payload.boardId;
    },
    [fetchTodo.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default todoSlice.reducer;
