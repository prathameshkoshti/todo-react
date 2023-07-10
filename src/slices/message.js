import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    type: "",
    message: "",
  },
  reducers: {
    setMessage(state, action) {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
