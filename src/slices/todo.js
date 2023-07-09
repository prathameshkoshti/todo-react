import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state = [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    isComplete: action.payload.isComplete,
                }
            ]
        },
        deleteTodo: (state) => {

        },
        completeTodo: (state, action) => {

        },
    }
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer;
