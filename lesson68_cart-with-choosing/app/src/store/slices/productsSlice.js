import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/products.js";

const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
};

const productsSlice = createSlice({
    name: "productsSlice",
    initialState: { list: data.map((el) => ({ ...el, isChecked: false })) },
    reducers: {
        
        changeSelectAction(state, { payload }) {
console.log("payload", payload);
            state.list.find((el) => el.id === payload.id).isChecked = payload.isChecked;
            // state.list.map((item) => item.id === payload.id ? { ...item.list, isChecked:  !state.list.isChecked } : item)
        },
    },
});
export const { changeSelectAction } = productsSlice.actions;
export default productsSlice.reducer;
