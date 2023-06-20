import { createSlice } from "@reduxjs/toolkit";

const read = () => {
    return JSON.parse(localStorage.getItem("bascket")) ?? [];
};
const write = (data) => {
    localStorage.setItem("bascket", JSON.stringify(data));
};

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

export const bascketSlice = createSlice({
    name: "bascket",
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
            state.list = []
            write( state.list);
        },
    },
});

export const { addAction, incrAction, decrAction, deleteAction, clearBascketAction } =
    bascketSlice.actions;

export default bascketSlice.reducer;
