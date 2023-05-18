import { goods } from "../../data/data";

const DELETE = '[GOODS] DELETE'
const PRICE_RANGE = '[GOODS] PRICE_RANGE'
const REMOVE_PRODUCTS = '[GOODS] REMOVE_PRODUCTS'
const SORTPRICE_ASC = '[GOODS] SORTPRICE_ASC'
const SORTPRICE_DESC = '[GOODS] SORTPRICE_DESC'


export const deleteAction = payload => ({type : DELETE, payload})
export const priceRangeAction = payload => ({type: PRICE_RANGE, payload})
export const removeProductsAction = () => ({type: REMOVE_PRODUCTS})
export const sortPriceAscAction = () => ({type: SORTPRICE_ASC})
export const sortPriceDescAction = () => ({type: SORTPRICE_DESC})

export const goodsReducer = (state = goods , action) => {
    if (action.type === DELETE){
        return state.filter(item => item.id !== action.payload)
    }else if(action.type === PRICE_RANGE){
        state = goods
        return state.filter(item => item.price >= action.payload.minPrice && item.price <= action.payload.maxPrice)
    }else if(action.type === REMOVE_PRODUCTS){
        return []
    }else if(action.type === SORTPRICE_ASC){
        return [...state.sort((x, y) => x.price - y.price)]
    }else if(action.type === SORTPRICE_DESC){
        return [...state.sort((x, y) => y.price - x.price)]
    }
    return state
}

