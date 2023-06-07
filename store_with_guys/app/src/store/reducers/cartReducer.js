const ADD_TO_CART = "[CART] ADD";
const INCREMENT = "[CART] INCREMENT";
const DECREMENT = "[CART] DECREMENT";
const DELETE = "[CART] DELETE";

// ***********************************  ACTIONS
export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload });

export const incrementInCartAction = (payload) => ({
    type: INCREMENT,
    payload,
});
export const decrementInCartAction = (payload) => ({
    type: DECREMENT,
    payload,
});
export const deleteFromCartAction = (payload) => ({
    type: DELETE,
    payload,
});

// ***********************************  HANDLERS
const checkProduct = (state, payload) => {
    const productInState = state.find((el) => el.id === payload.id);
    if (productInState) {
        productInState.count++;
        return [...state];
    } else {
        return [...state, { ...payload, count: 1 }];
    }
};

const increment = (state, payload) => {
    const target = state.find((el) => (el.id === payload));
    target.count++;
    return [...state];
};

const decrement = (state, payload) => {
    // функционал с удалением при достежении 0 при нажатии на минус
    //     const target = state.find((el) => (el.id = payload));
    //     if (target.count === 1) {
    //         state = state.filter((el) => el.id !== payload);
    //     } else {
    //         target.count--;
    //     }
    //     return [...state];

    // функционал с остановкой декрементации при достижении 1 при нажатии на минус
    const target = state.find((el) => (el.id === payload));
    if (target.count !== 1) {
        target.count--;
    }
    return [...state];
};

// ***********************************  REDUCER
export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return checkProduct(state, action.payload);
        case INCREMENT:
            return increment(state, action.payload);
        case DECREMENT:
            return decrement(state, action.payload);
        case DELETE:
            return [...state].filter((el) => el.id !== action.payload);

        default:
            return state;
    }
};
