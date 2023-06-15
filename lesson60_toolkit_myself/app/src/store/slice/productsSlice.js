import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'start',
    products : []
};

// const write = (data) => {
//     localStorage.setItem("testKey", JSON.stringify(data));
// };

// const read = ()=>{
//     return JSON.parse(localStorage.getItem("testKey")) ?? initialState
// }


export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    let data = await resp.json();

    data = data.slice(0, 10);

    return data;
});

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        incrementAction(state, action) {
            state.products.find((el) => el.id === action.payload).price++;
            
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "ready";
                state.products = action.payload.map((el) => ({...el}));
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const { incrementAction } = productsSlice.actions;

export default productsSlice.reducer;
