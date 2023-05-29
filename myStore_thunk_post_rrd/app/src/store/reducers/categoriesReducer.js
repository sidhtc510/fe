const actionTypes = { LOAD_CATEGORIES: "[LOAD] CATEGORIES" };

export const loadCategoriesAction = (payload) => ({ 
  type: actionTypes.LOAD_CATEGORIES,
  payload,
});

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_CATEGORIES:
      return [...action.payload];

    default:
      return state;
  }
};
