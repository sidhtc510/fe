
const initialState = {
  list: [],
  status: 'loading'
}

const LOAD = "[PRODUCTS] LOAD"
const FETCH_ALL_ERROR = "[PRODUCTS] FETCH_ALL_ERROR"

export const loadProductsAction = payload => ({type: LOAD, payload})
export const fetchAllProductsErrorAction = payload => ({type: FETCH_ALL_ERROR, payload})

export const productsReducer = (state = initialState, action) => {
  if (action.type === LOAD) {
    return {
      list: action.payload,
      status: 'ready'
    }
  }else if(action.type === FETCH_ALL_ERROR){
    return {
      status: "error"
    }
  }
  return state;
};


