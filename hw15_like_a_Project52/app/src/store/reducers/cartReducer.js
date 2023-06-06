const ADD_TO_CART = "[CART] ADD";

export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload });

const checkProductInCart = (state, payload) => {
    const product = state.find((el) => el.id === payload);
    if (product) {
        product.count++
        return [...state];
    } else {
        return [...state, { id: payload, count: 1 }];
    }
};

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return checkProductInCart(state, action.payload);
        default:
            return state;
    }
};
