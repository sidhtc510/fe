import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [ ],
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        add(state, action) {
            // state.list = [{ id: Date.now(), ...action.payload }, ...state.list];
            state.list.push({id:Date.now(), ...action.payload})
        },
    },
});

export const { add } = dataSlice.actions;

export default dataSlice.reducer;
