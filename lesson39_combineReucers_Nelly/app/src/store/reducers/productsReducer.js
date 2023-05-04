const defaultState = [];

const ADD_PRODUCT = "ADD_PRODUCT";

export const addProductAction = (payload) => ({ type: ADD_PRODUCT, payload });

export const productsReducer = (state = defaultState, action) => {
    if ( action.type === ADD_PRODUCT) {
       return [...state, action.payload]
    }else {
        return state;
    }
};

