const ADD_TO_CART = "[CART] ADD_TO_CART";
const INCREMENT = "[CART] INCREMENT";
const DECREMENT = "[CART] DECREMENT";
const CLEAR_CART = "[CART] CLEAR_CART";
const DELETE_PRODUCT_FROM_CART = "[CART] DELETE_PRODUCT";

export const add_to_cart = (payload) => ({ type: ADD_TO_CART, payload });
export const increment = (payload) => ({ type: INCREMENT, payload });
export const decrement = (payload) => ({ type: DECREMENT, payload });
export const clear_cart = (payload) => ({ type: CLEAR_CART, payload });
export const delete_product_from_cart = (payload) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload,
});

const checkProduct = (state, payload) => {
  const productInState = state.find((el) => el.id === payload.id);
  if (productInState) {
    productInState.count++;
    return [...state];
  } else {
    return [...state, { ...payload, count: 1 }];
  }
};

const incrementInReducer = (state, payload) => {
  const target = state.find((el) => el.id === payload);
  target.count++;
  return [...state];
};

const decrementInReducer = (state, payload) => {
  const target = state.find((el) => el.id === payload);
  if (target.count === 1) {
    state = state.filter((el) => el.id !== payload);
  } else {
    target.count--;
  }
  return [...state];
};

export const cartReducer = (state = [], action) => {
  if (action.type === ADD_TO_CART) {
    return checkProduct(state, action.payload);
  } else if (action.type === INCREMENT) {
    return incrementInReducer(state, action.payload);
  } else if (action.type === DECREMENT) {
    return decrementInReducer(state, action.payload);
  } else if (action.type === CLEAR_CART) {
    return [];
  } else if (action.type === DELETE_PRODUCT_FROM_CART) {
    return state.filter((el) => el.id !== action.payload);
 
  }
  return state;
};
