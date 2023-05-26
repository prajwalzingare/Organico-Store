import { UPDATE_WISHLIST } from "constants";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_WISHLIST:
      return {
        ...state,
        wishlist: [...action.payload.wishlist],
      };
    default:
      return state;
  }
};

export { reducer };
