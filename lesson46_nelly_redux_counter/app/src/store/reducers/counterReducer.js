const INCREMENT = "[COUNTER] INCREMENT";
const DECREMENT = "[COUNTER] DECREMENT";
const RESET = "[COUNTER] RESET";
const PLUS = "[COUNTER] PLUS";

export const incrementAction = () => ({ type: INCREMENT });
export const decrementAction = () => ({ type: DECREMENT });
export const resetAction = () => ({ type: RESET });
export const plusAction = (payload) => ({ type: PLUS, payload });

export const counterReducer = (state = 0, action) => {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  } else if (action.type === RESET) {
    return (state = 0);
  } else if (action.type === PLUS) {
    return state + action.payload;
  } else {
    return state;
  }
};
