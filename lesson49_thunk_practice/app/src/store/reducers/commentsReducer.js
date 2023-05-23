const LOAD = "[COMMENTS] LOAD";

export const commentsLoadAction = (payload) => ({ type: LOAD, payload });

export const commentsReducer = (state = [], action) => {
  if(action.type === LOAD){
    // console.log(action.payload);
    return [...action.payload]
  }
    return state;

};
