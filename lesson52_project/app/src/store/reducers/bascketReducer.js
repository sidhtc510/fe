const LOAD = "[BASCKET] LOAD";
const ADD = "[BASCKET] ADD";
const INCR = "[BASCKET] INCR";
const DECR = "[BASCKET] DECR";
const CLEAR = "[BASCKET] CLEAR";
const DELETEITEM = "[BASCKET] DELETEITEM";

export const loadBascketAction = (payload) => ({ type: LOAD, payload });
export const AddToBascketAction = (payload) => ({ type: ADD, payload });
export const INCREMENTBascketAction = (payload) => ({ type: INCR, payload });
export const DECREMENTBascketAction = (payload) => ({ type: DECR, payload });
export const ClearBascketAction = () => ({ type: CLEAR });
export const deleteItemBascketAction = (payload) => ({ type: DELETEITEM, payload });

const checkProduct = (state, payload) => {
  const productInState = state.find((el) => el.id === payload.id);
  if (productInState) {
    productInState.count++;
    return [...state];
  } else {
    return [...state, { ...payload, count: 1 }];
  }
};


const incrementInReducer = (state, payload) => {
  const target = state.find((el) => el.id === payload);
  target.count++;
  return [...state];
};

const decrementInReducer = (state, payload) => {
  const target = state.find((el) => el.id === payload);
  if (target.count === 1) {
    state = state.filter((el) => el.id !== payload);
  } else {
    target.count--;
  }
  return [...state];
};


export const bascketReducer = (state = [], action) => {
  if (action.type === ADD) {
    return checkProduct(state, action.payload);
  } else if(action.type === INCR) {
    return incrementInReducer(state, action.payload);
  }
   else if(action.type === DECR) {
    return decrementInReducer(state, action.payload);
  }
   else if(action.type === CLEAR) {
    return [];
  }
   else if(action.type === DELETEITEM) {
    return state.filter(el=>el.id !== action.payload);
  }
  return state;
};
