import {combineReducers, createStore} from 'redux'
import { goodsReducer } from './reducers/goodsReducer'


const rootReducer = combineReducers({
    goods: goodsReducer
})

export const store = createStore(rootReducer)