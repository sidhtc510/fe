import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const resp = await fetch("https://fakestoreapi.com/products");
        const data = await resp.json();
        console.log(data);
        return data;
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState: { list: [] },
    reducers: {
        priceAction(state, { payload }) {
            const { min, max } = payload;
            state.list.forEach((item) => {
                item.show.price = item.price >= min && item.price <= max;
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload.map((item) => ({
                    ...item,
                    show: { search: true, price: true, rate: true },
                }));
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const { priceAction } = productsSlice.actions;

export default productsSlice.reducer;
