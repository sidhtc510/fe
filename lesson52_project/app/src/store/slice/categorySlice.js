import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const resp = await fetch("https://fakestoreapi.com/products/categories");
    const data = await resp.json();
    return data;
});



export const categorySlice = createSlice({
    name: "category",
    initialState : { list: []},
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = "rejected";
            });
    },
})

export const {} = categorySlice.actions;

export default categorySlice.reducer;