
const initialState = {
  list: [],
  status: 'loading'
}

const LOAD = "[PRODUCTS] LOAD"
const FETCH_ALL_ERROR = "[PRODUCTS] FETCH_ALL_ERROR"
const SEARCH = "[PRODUCTS] SEARCH"

export const loadProductsAction = payload => ({type: LOAD, payload})
export const fetchAllProductsErrorAction = payload => ({type: FETCH_ALL_ERROR, payload})
export const searchProductsAction = payload => ({type: SEARCH, payload})


export const productsReducer = (state = initialState, action) => {
  if (action.type === LOAD) {
    return {
      list: action.payload.map(item=>({...item, show: 'true'})),
      status: 'ready'
    }
  }else if(action.type === FETCH_ALL_ERROR){
    return {
      status: "error"
    }
  }else if(action.type === SEARCH){
      return {
        ...state, 
        list: state.list.map(item=>({...item, show: item.title.startsWith(action.payload)}))
      } 
  }

  return state;
};


