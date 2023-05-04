import {createStore} from 'redux';
import { userReducer } from './reducer/userReducer';

export const store = createStore(userReducer);