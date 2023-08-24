import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        { id: 1, count: 2 },
        { id: 4, count: 5 },
    ],
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increaseAction(state, { payload }) {
            const target = state.list.find((el) => el.id === payload);
            target.count++;
        },
        decreaseAction(state, { payload }) {
            const target = state.list.find((el) => el.id === payload);
            if (target.count === 1) {
                state.list.filter((el) => el.id !== payload);
            } else {
                target.count--;
            }
        },
        deleteAction(state, { payload }) {
            state.list = state.list.filter((el) => el.id !== payload);
        },
        clearCartAction(state) {
           state.list = []
        },
    },
});

export const { increaseAction, decreaseAction, deleteAction, clearCartAction } = cartSlice.actions;
export default cartSlice.reducer;
