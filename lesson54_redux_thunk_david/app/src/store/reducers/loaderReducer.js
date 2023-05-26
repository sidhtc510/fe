const actionTypes = {
  SHOW_LOADER: 'SHOW_LOADER',
  HIDE_LOADER: 'HIDE_LOADER',
};

export const showLoader = () => ({ type: actionTypes.SHOW_LOADER });
export const hideLoader = () => ({ type: actionTypes.HIDE_LOADER });

const initialState = {
  isLoading: false,
};

export const loaderReducer = ( state = initialState, action ) => {
  switch (action.type) {
      case actionTypes.SHOW_LOADER : {
          return { isLoading: true };
      }
      case actionTypes.HIDE_LOADER : {
          return { isLoading: false };
      }
      default: return state;
  }
}