import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: {},
    list: [],
    status: "",
};
const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const resp = await fetch("http://localhost:3333/products/all");
    const data = await resp.json();

    const normalizedData = Array.isArray(data) ? { data: [...data] } : data;

    return normalizedData;
});

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        priceAction(state, { payload }) {
            const { min, max } = payload;
            state.list.forEach((item) => {
                const currentPrice = item.discont_price ?? item.price;
                item.show.price = currentPrice >= min && currentPrice <= max;
            });
        },

        rateAction(state, { payload }) {
            state.list.forEach((item) => {
                item.show.rate = !payload || item.discont_price !== null;
            });
        },
        sortAction(state, { payload }) {
            if (payload === false) {
                return state;
            }
            ({
                priceAsc: () => state.list.sort((a, b) => a.price - b.price),
                priceDesc: () => state.list.sort((a, b) => b.price - a.price),
                titleAtoZ: () => state.list.sort((a, b) => a.title.localeCompare(b.title)),
                titleZtoA: () => state.list.sort((a, b) => b.title.localeCompare(a.title)),
            })[payload]();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.category = payload.category ?? {};
                state.list = payload.data.map((item) => ({
                    ...item,
                    show: { search: true, price: true, rate: true },
                }));
                // myConsole(state)
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const { priceAction, rateAction, sortAction } = productsSlice.actions;
export default productsSlice.reducer;
