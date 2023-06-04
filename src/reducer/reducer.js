import { UPDATE_CART } from "constants";
import { UPDATE_WISHLIST } from "constants";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_WISHLIST:
      return {
        ...state,
        wishlist: [...action.payload.wishlist],
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: [...action.payload.cart],
      };
    default:
      return state;
  }
};

export { reducer };
