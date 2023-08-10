import { createSlice } from "@reduxjs/toolkit";

const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
};
const cartSlice = createSlice({
    name: "cartSlice",
    initialState: { list: [] },
    reducers: {
        addItemsAction(state, { payload }) {
            state.list = payload
            //    myConsole(state)
        },
    },
});

export const { addItemsAction } = cartSlice.actions;
export default cartSlice.reducer;
