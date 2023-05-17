import { PRICE_SORT } from "constants";

const reducer = (state, action) => {
  switch (action.type) {
    case PRICE_SORT:
      return { ...state, sortByPrice: action.payload };

    default:
      return state;
  }
};

export { reducer };
