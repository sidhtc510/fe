const LOAD_USERS = "[USERS] LOAD_USERS";
const LOAD_SINGLE_USER = "[USERS] LOAD_SINGLE_USER";

export const loadUsersAction = (payload) => ({ type: LOAD_USERS, payload });
export const loadSingleUserAction = (payload) => ({
  type: LOAD_SINGLE_USER,
  payload,
});

export const usersReducer = (state = [], action) => {
  if (action.type === LOAD_USERS) {
    return [...state, ...action.payload];
  } else if (action.type === LOAD_SINGLE_USER) {
    return [...state, action.payload];
  }
  return state;
};
