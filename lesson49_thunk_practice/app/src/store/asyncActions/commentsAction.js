import { commentsLoadAction } from "../reducers/commentsReducer"

export const commentsAction = (dispatch) => {
    fetch('https://dummyjson.com/comments')
    .then(resp => resp.json())
    .then(data => dispatch(commentsLoadAction(data.comments)))
}