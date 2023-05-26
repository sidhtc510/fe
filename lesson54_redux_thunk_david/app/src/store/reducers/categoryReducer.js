const LOAD_CATEGORY = "[CATEGORY] LOAD";

export const loadCategoryAction = payload => ({type:LOAD_CATEGORY, payload})

export const categoryReducer = (state = [], action) => {
  if (action.type === LOAD_CATEGORY) {
    return action.payload;
  }
  return state;
};
