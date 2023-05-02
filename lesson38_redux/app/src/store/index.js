import {createStore} from 'redux';
import { wordsReduser } from './reducer/wordsReduser';

export const store = createStore(wordsReduser);

