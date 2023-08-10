import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    status: "loading",
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const resp = await fetch("http://127.0.0.1:5500/products.json");
    const data = await resp.json();
    return data;
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filterPriceAction(state, { payload }) {
            const { min, max } = payload;
            state.list.forEach((item) => {
                const currentPrice = item.new_price ?? item.price;
                item.show.price = currentPrice >= min && currentPrice <= max;
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
                    show: { price: true },
                }));
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const { filterPriceAction } = productsSlice.actions;

export default productsSlice.reducer;
