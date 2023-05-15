import { goods } from "../../data/data";

const DELETE = '[GOODS] DELETE'
export const deleteAction = payload => ({type : DELETE, payload})
export const goodsReducer = (state = goods , action) => {
    if (action.type === DELETE){
        return state.filter(item => item.id !== action.payload)
    }
    return state
}