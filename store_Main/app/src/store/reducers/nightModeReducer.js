const SWITCH = "[NIGHT MODE] SWITCH";
export const nightModeAction = () => ({ type: SWITCH });

export const nightModeReducer = (state = false, action) => {
      if (action.type === SWITCH) {
            return !state;
      }
      return state;
};
