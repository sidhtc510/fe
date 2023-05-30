import {combineReducers, createStore} from 'redux'
import { goodsReducer } from './reducers/goodsReducer'
import { priceRangeReducer } from './reducers/priceRangeReducer'


const rootReducer = combineReducers({
    goods: goodsReducer,
    priceRange: priceRangeReducer
})

export const store = createStore(rootReducer)