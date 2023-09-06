import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        const resp = await fetch("http://localhost:3333/categories/all");
        const data = await resp.json();
        return data;
    }
);

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export default categoriesSlice.reducer;
