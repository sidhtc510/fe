import {createStore} from 'redux'
import { itemReducer } from './itemReducer'

export const store = createStore(itemReducer)