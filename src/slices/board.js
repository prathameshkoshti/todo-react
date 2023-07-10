import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../api/client";
import { setMessage } from "./message";

export const fetchBoards = createAsyncThunk("boards/fetch", async () => {
  const response = await client.get("boards");
  return response.data;
});

export const deleteBoard = createAsyncThunk(
  "boards/delete",
  async (id, { dispatch }) => {
    const response = await client.delete(`boards/${id}`);
    dispatch(fetchBoards());
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

export const createBoard = createAsyncThunk(
  "boards/create",
  async (params, { dispatch }) => {
    const response = await client.post("boards", { ...params });
    dispatch(fetchBoards());
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

export default boardSlice.reducer;
