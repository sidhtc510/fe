import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const read = () => {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
};
const write = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
};

export const postOrder = createAsyncThunk(
    "cart/postOrder",
    async (postData) => {
        try {
            const response = await axios.post(
                "http://localhost:3333/order/send",
                postData
            );
            return response.data;
        } catch (error) {
 
            throw error;
        }
    }
);

const checkProduct = (state, payload) => {
    const target = state.list.find((el) => el.id === payload.id);

    if (target) {
        target.count++;
    } else {
        state.list.push({ ...payload, count: 1 });
    }
    write(state.list);
};

const incrementInReducer = (state, payload) => {
    const target = state.list.find((el) => el.id === payload);
    target.count++;
    write(state.list);
};

const decrementInReducer = (state, payload) => {
    const target = state.list.find((el) => el.id === payload);
    if (target.count === 1) {
        state.list.filter((el) => el.id !== payload);
    } else {
        target.count--;
    }
    write(state.list);
};

const countInReducer = (state, payload) => {
    const target = state.list.find((el) => el.id === payload.id);
    target.count = payload.count;
    write(state.list);
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: { list: read() },
    reducers: {
        addAction(state, action) {
            checkProduct(state, action.payload);
        },
        incrAction(state, action) {
            incrementInReducer(state, action.payload);
        },
        decrAction(state, action) {
            decrementInReducer(state, action.payload);
        },
        deleteAction(state, action) {
            state.list = state.list.filter((el) => el.id !== action.payload);
            write(state.list);
        },
        clearBascketAction(state) {
            state.list = [];
            write(state.list);
        },
        setCountAction(state, action) {
            countInReducer(state, action.payload);
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(postOrder.pending, (state) => {
                state.status = "loading";
            })
            .addCase(postOrder.fulfilled, (state, action) => {
                state.status = "succeeded";
                console.log(action.payload);
            })
            .addCase(postOrder.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const {
    addAction,
    incrAction,
    decrAction,
    deleteAction,
    clearBascketAction,
    setCountAction,
} = cartSlice.actions;

export default cartSlice.reducer;
