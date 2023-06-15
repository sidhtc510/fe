import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

export const fetchToDo = createAsyncThunk("todo/fetchToDo", async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await resp.json();

    data = data.slice(0, 10);

    return data;
});

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
            state.list = [
                ...state.list,
                { id: Date.now(), task: action.payload },
            ];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchToDo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchToDo.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload.map(({ id, title, completed }) => ({
                    id,
                    task: title,
                }));
            })
            .addCase(fetchToDo.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const { remove, clear, add } = todoSlice.actions;

export default todoSlice.reducer;
