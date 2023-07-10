import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../api/client";

export const fetchBoards = createAsyncThunk("boards/fetch", async () => {
  const response = await client.get("boards");
  return response.data;
});

export const deleteBoard = createAsyncThunk(
  "boards/delete",
  async (id, { dispatch }) => {
    const response = await client.delete(`boards/${id}`);
    dispatch(fetchBoards());
    return response.data;
  },
);

export const createBoard = createAsyncThunk(
  "boards/create",
  async (params, { dispatch }) => {
    const response = await client.post("boards", { ...params });
    dispatch(fetchBoards());
    return response.data;
  },
);

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: {
    [fetchBoards.pending]: (state) => {
      state.loading = true;
    },
    [fetchBoards.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.list = payload.boards;
    },
    [fetchBoards.pending]: (state) => {
      state.loading = false;
    },
  },
});

export const selectBoard = (state, id) =>
  state.boards.find((board) => board.id === id);

export default boardSlice.reducer;
