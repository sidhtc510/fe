import { createStore } from "redux"

function reducer(state = {priceTo: ''}, action){

    switch (action.type) {
        case 'filter/price/to':
            return {
                ...state, 
                priceTo: action.payload
            }
    
        default:
            return state
    }
}

export const store = createStore(reducer)