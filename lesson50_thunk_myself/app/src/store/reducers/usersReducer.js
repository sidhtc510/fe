const LOAD_USER = "[USERS] LOAD";

export const loadUserAction = payload =>({type: LOAD_USER, payload})

export const usersReducer = (state = [], action) => {
  if (action.type === LOAD_USER) {
    return [...action.payload];
  }
  return state;
};
