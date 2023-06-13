import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        { id: 1, task: "task1" },
        { id: 2, task: "task2" },
        { id: 3, task: "task3" },
        { id: 4, task: "task4" },
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        remove(state, { payload }) {
            state.list = state.list.filter(({ id }) => id !== payload);
        },
        clear(state) {
            state.list = [];
        },
        add(state, action) {
            // state.list.push({ id: Date.now(), task: action.payload });
            state.list = [...state.list, { id: Date.now(), task: action.payload }];
        },
    },
});

export const { remove, clear, add } = todoSlice.actions;

export default todoSlice.reducer;
