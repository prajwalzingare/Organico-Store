import {
  SORT_PRODUCTS,
  CLEAR_FILTERS,
  PRICE_RANGE,
  SORT_BY_RATING,
  SEARCH_ITEM,
  FILTER_BY_CATEGORY,
  TOGGLE_STOCK,
} from "constants";

const filterReducer = (state, action) => {
  switch (action.type) {
    case SORT_PRODUCTS:
      return { ...state, sortBy: action.payload };
    case PRICE_RANGE:
      return { ...state, priceRange: action.payload };
    case SORT_BY_RATING:
      return { ...state, starRating: action.payload };
    case SEARCH_ITEM:
      return { ...state, searchText: action.payload };
    case FILTER_BY_CATEGORY:
      const updatedCategory = state.selectedCategory.includes(action.payload)
        ? state.selectedCategory.filter(
            (addedCategory) => addedCategory !== action.payload
          )
        : [...state.selectedCategory, action.payload];

      return { ...state, selectedCategory: updatedCategory };
    case TOGGLE_STOCK:
      return { ...state, isOutOfStock: !state.isOutOfStock };
    case CLEAR_FILTERS:
      return {
        ...state,
        sortBy: "",
        priceRange: { min: 0, max: 1110 },
        starRating: "",
        searchText: "",
        selectedCategory: [],
      };

    default:
      return state;
  }
};

export { filterReducer };
