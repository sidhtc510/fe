import { loadUserAction } from "../reducers/usersReducer"; 

export const usersFetch = (dispatch) =>{
    fetch('https://dummyjson.com/users')
    .then(resp => resp.json())
    .then(data => dispatch(loadUserAction(data.users)))
}