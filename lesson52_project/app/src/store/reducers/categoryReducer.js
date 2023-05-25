const LOAD = "[CATEGORY] LOAD"

export const loadCategoriesAction = payload => ({type: LOAD, payload})

export const categoryReducer = (state = [], action) => {
  if (action.type === LOAD) {
    return action.payload
  }
  return state;
};


