import {
  SORT_PRODUCTS,
  CLEAR_FILTERS,
  PRICE_RANGE,
  STAR4_ABOVE,
  STAR3_ABOVE,
  STAR2_ABOVE,
} from "constants";

const reducer = (state, action) => {
  switch (action.type) {
    case SORT_PRODUCTS:
      return { ...state, sortBy: action.payload };
    case PRICE_RANGE:
      return { ...state, priceRange: action.payload };
    case STAR4_ABOVE:
      return { ...state, starRating: action.payload };
    case STAR3_ABOVE:
      return { ...state, starRating: action.payload };
    case STAR2_ABOVE:
      return { ...state, starRating: action.payload };
    case CLEAR_FILTERS:
      return {
        ...state,
        sortBy: "",
        priceRange: { min: 0, max: 1110 },
        starRating: "",
      };
    default:
      return state;
  }
};

export { reducer };
