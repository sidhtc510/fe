const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT'

export const productListReducer = (state = [], action) => {
    switch(action.type){
        case ADD_NEW_PRODUCT:
            return action.payload
            default : 
            return state
    }
};

export const addNewProductsAction = payload => ({type: ADD_NEW_PRODUCT, payload})