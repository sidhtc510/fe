import {
  loadSingleUserAction,
  loadUsersAction,
} from "../reducers/usersReducer";

export const fetchUsers = async (dispatch) => {
  const resp = await fetch("https://dummyjson.com/users");
  const data = await resp.json();
  const clearData = data.users.map(({ id, firstName, lastName }) => ({
    id,
    name: firstName,
    lastname: lastName,
  }));
  dispatch(loadUsersAction(clearData));
};

export const fetchSingleUser = (user_id) => {
  return async (dispatch) => {
    const resp = await fetch(`https://dummyjson.com/users/${user_id}`);
    const { id, firstName, lastName } = await resp.json();
    const clearData = { id, name: firstName, lastname: lastName };
    dispatch(loadSingleUserAction(clearData));
  };
};
