import {combineReducers, createStore} from 'redux'
import { postsReducer } from './reducers/postsReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
});

export const store = createStore(rootReducer)