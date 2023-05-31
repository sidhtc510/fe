const ADD_TO_CART = "[CART] ADD";

export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload });

const checkProduct = (state, payload) => {
  const productInState = state.find((el) => el.id === payload.id);
  if (productInState) {
    productInState.count++;
    return [...state];
  } else {
    return [...state, { ...payload, count: 1 }];
  }
};

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
    return checkProduct(state, action.payload)
    default:
      return state;
  }
};
