const LOAD_PRODUCTS= "[USERS] LOAD_PRODUCTS";

export const loadProductsAction = (payload) => ({ type: LOAD_PRODUCTS, payload });


export const productsReducer = (state = [], action) => {
if(action.type === LOAD_PRODUCTS){
    return [...state, ...action.payload]
}
  return state;
};
