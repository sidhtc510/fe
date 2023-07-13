import { createSlice } from "@reduxjs/toolkit";

const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
};

const initialState = {
    list: [
        {
            id: 1,
            hName: "tolik",
            hNumber: "3213",
            dateExpire: "12 / 12",
            cvc: "222",
            show: true,
        },
        {
            id: 2,
            hName: "netolik",
            hNumber: "5213",
            dateExpire: "12 / 12",
            cvc: "222",
            show: true,
        },
        {
            id: 3,
            hName: "netolik",
            hNumber: "4213",
            dateExpire: "12 / 12",
            cvc: "222",
            show: true,
        },
    ],
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        add(state, action) {
            // state.list = [{ id: Date.now(), ...action.payload }, ...state.list];
            state.list.push({ id: Date.now(), ...action.payload, show: true });
        },
        search(state, { payload }) {
            state.list.forEach((item) => {
                item.show = item.hName
                    .toLowerCase()
                    .includes(payload.toLowerCase());
            });
        },
        typeOfCardAction(state, { payload }) {
            state.list.forEach((item) => {
                item.show =
                    payload === "visa"
                        ? item.hNumber[0] === "4"
                        : payload === "mc"
                        ? item.hNumber[0] === "5"
                        : true;
            });
        },
    },
});

export const { add, search, typeOfCardAction } = dataSlice.actions;

export default dataSlice.reducer;
