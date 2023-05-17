import { goods } from "../../data/data";

const DELETE = '[GOODS] DELETE'
const PRICE_RANGE = '[GOODS] PRICE_RANGE'

export const deleteAction = payload => ({type : DELETE, payload})
export const priceRangeAction = payload => ({type : PRICE_RANGE, payload})


export const goodsReducer = (state = goods , action) => {
    if (action.type === DELETE){
        return state.filter(item => item.id !== action.payload)
    } else if(action.type === PRICE_RANGE){
        state = goods;
        return state.filter(el=> el.price >= action.payload.minPrice && el.price <= action.payload.maxPrice)
    }
    return state
}