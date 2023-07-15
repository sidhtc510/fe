import { createSlice } from "@reduxjs/toolkit";

const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
};

const initialState = {
    list: [
        {
            id: 1,
            hName: "Tolik",
            hNumber: "5213321332133213",
            dateExpire: "12 / 20",
            cvc: "550",
            show: {
                search: true,
                cardType: true,
            },
        },
        {
            id: 2,
            hName: "Kamran",
            hNumber: "4213321332133213",
            dateExpire: "12 / 25",
            cvc: "622",
            show: {
                search: true,
                cardType: true,
            },
        },
        {
            id: 3,
            hName: "Grisha",
            hNumber: "3213321332133213",
            dateExpire: "12 / 24",
            cvc: "318",
            show: {
                search: true,
                cardType: true,
            },
        },
        {
            id: 4,
            hName: "Sasha",
            hNumber: "5213321332133213",
            dateExpire: "12 / 18",
            cvc: "843",
            show: {
                search: true,
                cardType: true,
            },
        },
    ],
};

// const cardTypes = {
//     'visa' : '4',
//     'mc' : '5',
// }

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        add(state, action) {
            state.list.push({
                id: Date.now(),
                ...action.payload,
                show: {
                    search: true,
                    cardType: true,
                },
            });
        },
        search(state, { payload }) {
            // myConsole(state)
            state.list.forEach((item) => {
                item.show.search = item.hName
                    .toLowerCase()
                    .includes(payload.toLowerCase());
            });
        },
        typeOfCardAction(state, { payload }) {
            state.list.forEach((item) => {
                // item.show = (item.hNumber[0] === cardTypes[payload])
                item.show.cardType =
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
