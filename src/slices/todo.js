import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../api/client";

export const fetchTodo = createAsyncThunk("todo/fetch", async (boardId) => {
  const response = await client.get(`todo/${boardId}`);
  return response.data;
});

export const createTodo = createAsyncThunk(
  "boards/create",
  async (params, { dispatch, getState }) => {
    const state = getState();
    const response = await client.post("todo", { ...params });
    dispatch(fetchTodo(state.todo.selectedBoard));
    return response.data;
  },
);

export const completeTodo = createAsyncThunk(
  "boards/create",
  async (id, { dispatch, getState }) => {
    const state = getState();
    const response = await client.put(`todo/${id}`);
    dispatch(fetchTodo(state.todo.selectedBoard));
    return response.data;
  },
);

export const deleteTodo = createAsyncThunk(
  "boards/delete",
  async (id, { dispatch, getState }) => {
    const state = getState();
    const response = await client.delete(`boards/${id}`);
    dispatch(fetchTodo(state.todo.selectedBoard));
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
      state.selectedBoard = payload.todo[0].boardId;
    },
    [fetchTodo.pending]: (state) => {
      state.loading = false;
    },
  },
});

export default todoSlice.reducer;
