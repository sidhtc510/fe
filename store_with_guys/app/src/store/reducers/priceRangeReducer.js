const PRICE_RANGE = "[GOODS] PRICE_RANGE";

export const priceRangeAction = (payload) => ({ type: PRICE_RANGE, payload });

export const priceRangeReducer = (
      state = { minPrice: 0, maxPrice: 0, isInStock: false },
      action
) => {
      switch (action.type) {
            case PRICE_RANGE:
                  return { ...action.payload };

            default:
                  return state;
      }
};
