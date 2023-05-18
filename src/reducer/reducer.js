import { SORT_PRODUCTS, CLEAR_FILTERS } from "constants";

const reducer = (state, action) => {
  switch (action.type) {
    case SORT_PRODUCTS:
      return { ...state, sortBy: action.payload };
    case CLEAR_FILTERS:
      return { ...state, sortBy: "" };
    default:
      return state;
  }
};

export { reducer };
