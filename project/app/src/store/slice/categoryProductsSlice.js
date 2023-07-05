import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
        "category": {
        },
        "list": [
        ],
        "status":""
};

export const fetchCategoryProducts = createAsyncThunk(
    "products/CategoryProducts",
    async (category_id) => {
        const resp = await fetch(`http://localhost:3333/categories/${category_id}`);
        const data = await resp.json();
        return data;
    }
);



export const categoryProductsSlice = createSlice({
    name: "categoryProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoryProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategoryProducts.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload.data;
                state.category = payload.category;

            })
            .addCase(fetchCategoryProducts.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export default categoryProductsSlice.reducer;
