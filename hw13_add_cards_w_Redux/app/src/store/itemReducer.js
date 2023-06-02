const ADD = "[ITEM] ADD";
const REMOVE = "[ITEM] REMOVE";

export const addAction = (payload) => ({ type: ADD, payload });
export const removeAction = (payload) => ({ type: REMOVE, payload });

export const itemReducer = (state = [], action) => {
      switch (action.type) {
            case ADD:
                  return [action.payload, ...state];
            case REMOVE:

                  return [...state].filter(({ id }) => id !== action.payload);
            default:
                  return state;
      }
};
