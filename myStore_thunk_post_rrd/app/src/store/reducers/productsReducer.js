const actionTypes = { LOAD_PRODUCTS: "[LOAD] PRODUCTS" };

export const loadProductsAction = (payload) => ({
  type: actionTypes.LOAD_PRODUCTS,
  payload,
});

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return [...action.payload];

    default:
      return state;
  }
};
