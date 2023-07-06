import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            id:1,
            hName: "anatolii",
            hNumber: "1234432112344321",
            mm: "12",
            yy: "23",
            cvc: "555",
        },
    ],
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        add(state, action) {
            console.log(action.payload);
            state.list = [{ id: Date.now(), ...action.payload }, ...state.list];
        },
    },
});

export const { add } = dataSlice.actions;

export default dataSlice.reducer;
