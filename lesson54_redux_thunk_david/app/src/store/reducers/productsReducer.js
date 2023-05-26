
const  PRODUCTS_LOADER = "PRODUCTS_LOADER";


export const productsLoader = payload => ({ type: PRODUCTS_LOADER, payload });

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_LOADER: {
      
      // console.log(action.payload);
      return [...action.payload];
    }
    default:
   
      return state;
  }
};
