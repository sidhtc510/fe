const read = () => {
    return JSON.parse(localStorage.getItem("bascket")) ?? [];
};
const write = (data) => {
    localStorage.setItem("bascket", JSON.stringify(data));
};

const LOAD = "[BASCKET] LOAD";
const ADD = "[BASCKET] ADD";
const INCR = "[BASCKET] INCR";
const DECR = "[BASCKET] DECR";
const CLEAR = "[BASCKET] CLEAR";
const DELETEITEM = "[BASCKET] DELETEITEM";

export const loadBascketAction = (payload) => ({ type: LOAD, payload });
export const AddToBascketAction = (payload) => ({ type: ADD, payload });
export const INCREMENTBascketAction = (payload) => ({ type: INCR, payload });
export const DECREMENTBascketAction = (payload) => ({ type: DECR, payload });
export const ClearBascketAction = () => ({ type: CLEAR });
export const deleteItemBascketAction = (payload) => ({
    type: DELETEITEM,
    payload,
});

const checkProduct = (state, payload) => {
    const productInState = state.find((el) => el.id === payload.id);
    let newState;
    if (productInState) {
        productInState.count++;
        newState = [...state];
    } else {
        newState = [...state, { ...payload, count: 1 }];
    }
    write(newState);
    return newState;
};

const incrementInReducer = (state, payload) => {
    let newState;
    const target = state.find((el) => el.id === payload);
    target.count++;
    newState = [...state];
    write(newState);
    return newState;
};

const decrementInReducer = (state, payload) => {
    let newState;
    const target = state.find((el) => el.id === payload);
    if (target.count === 1) {
        state = state.filter((el) => el.id !== payload);
    } else {
        target.count--;
    }
    newState = [...state];

    write(newState);
    return newState;
};

export const bascketReducer = (state = read(), action) => {
    if (action.type === ADD) {
        return checkProduct(state, action.payload);
    } else if (action.type === INCR) {
        return incrementInReducer(state, action.payload);
    } else if (action.type === DECR) {
        return decrementInReducer(state, action.payload);
    } else if (action.type === CLEAR) {
        write([]);
        return [];
    } else if (action.type === DELETEITEM) {
        let newState;
        newState = state.filter((el) => el.id !== action.payload);
        write(newState);
        return newState;
    }
    return state;
};
