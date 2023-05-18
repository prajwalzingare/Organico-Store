import {
  SORT_PRODUCTS,
  CLEAR_FILTERS,
  PRICE_RANGE,
  SORT_BY_RATING,
  SEARCH_ITEM,
} from "constants";

const reducer = (state, action) => {
  switch (action.type) {
    case SORT_PRODUCTS:
      return { ...state, sortBy: action.payload };
    case PRICE_RANGE:
      return { ...state, priceRange: action.payload };
    case SORT_BY_RATING:
      return { ...state, starRating: action.payload };
    case SEARCH_ITEM:
      return { ...state, searchText: action.payload };

    case CLEAR_FILTERS:
      return {
        ...state,
        sortBy: "",
        priceRange: { min: 0, max: 1110 },
        starRating: "",
        searchText: "",
      };
    default:
      return state;
  }
};

export { reducer };
