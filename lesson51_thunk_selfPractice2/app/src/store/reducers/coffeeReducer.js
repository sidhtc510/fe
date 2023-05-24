const LOAD = "[LOAD] COFFEE";

export const coffeeAction = (payload) => ({ type: LOAD, payload });

export const coffeeReducer = (state = [], action) => {
if (action.type === LOAD) {
    return [...action.payload]
}

  return state;
};
