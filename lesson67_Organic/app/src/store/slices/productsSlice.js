import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// const myConsole = (data) => {
//     const stateStringify = JSON.stringify(data);
//     console.log(JSON.parse(stateStringify));
// };

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
        filterDiscountAction(state, { payload }) {
            state.list.forEach((item) => {
                item.show.discount = !payload || item.new_price !== null;
            });
        },
        filterMarkAction(state, { payload }) {
            state.list.forEach((item) => {
                item.show.mark = +payload === -1 || item.mark === +payload;
            });
        },
        filterCategoryAction(state, { payload }) {
            state.list.forEach((item) => {
                item.show.category = payload === "-1" || item.type === payload;
            });
        },
        filterResetAction(state) {
            // state.list.forEach((item, index) => {
            //     state.list[index] = {
            //         ...item,
            //         show: { price: true, discount: true, mark: true, category: true },
            //     };
            // });

            state.list.forEach((product) => {
                Object.keys(product.show).forEach((key) => {
                    product.show[key] = true;
                });
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
                    show: { price: true, discount: true, mark: true, category: true },
                }));
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const { filterPriceAction, filterDiscountAction, filterMarkAction, filterCategoryAction, filterResetAction } = productsSlice.actions;

export default productsSlice.reducer;
