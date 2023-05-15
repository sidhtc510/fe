const ADD_PRODUCT = "[PRODUCTS] ADD";
const DELETE_PRODUCT = "[PRODUCTS] DELETE";

export const addProductAction = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});
export const deleteProductAction = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

export const productsReducer = (state = [], action) => {
  if (action.type === ADD_PRODUCT) {
    return [...state, { id: Date.now(), ...action.payload }];
  } else if (action.type === DELETE_PRODUCT) {

   return state.filter((el) => el.id !== action.payload);
  
  }
  return state;
};
