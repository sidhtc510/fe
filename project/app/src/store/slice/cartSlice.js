import { createSlice } from "@reduxjs/toolkit";
const data = [
    // {
    //     categoryId: 1,
    //     createdAt: "2022-10-02T14:43:29.000Z",
    //     description:
    //         "Angelonia angustifolia Archangel™ White displays pristine white blossoms arranged on tall stems that sparkle above clean, glossy, dark green foliage. These sturdy, well-branched plants add texture and commanding presence to borders, containers, and flower arrangements.",
    //     discont_price: null,
    //     id: 2,
    //     image: "/product_img/2.jpeg",
    //     price: 10.75,
    //     title: "Angelonia angustifolia Archangel™ White",
    //     updatedAt: "2022-10-02T14:43:29.000Z",
    // },
];

const read = () => {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
};
const write = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
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
