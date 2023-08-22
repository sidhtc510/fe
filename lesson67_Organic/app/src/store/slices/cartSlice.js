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
    },
});

export const { increaseAction, decreaseAction } = cartSlice.actions;
export default cartSlice.reducer;
