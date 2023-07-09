import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
    name: 'todos',
    initialState: {
        boards: [],
    },
    reducers: {
        addBoard: (state, action) => {
            state = [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                }
            ]
        },
        deleteBoard: (state) => {

        },
    }
});

export const { addBoard, deleteBoard } = boardSlice.actions

export default boardSlice.reducer