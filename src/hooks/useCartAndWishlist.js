import { UPDATE_WISHLIST } from "constants";
import { useAuth, useData } from "context";

import { useNavigate } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "services";

function useCartAndWishlist() {
  const { token } = useAuth();
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  //handle wishlist Item removel from wishlist
  const handleWishlist = async (e, product) => {
    e.preventDefault();
    try {
      const res = await removeFromWishlist(token, product._id);
      dispatch({
        type: UPDATE_WISHLIST,
        payload: { wishlist: res.wishlist },
      });
    } catch (error) {
      console.log(error);
    }
  };
  //function for checking Item isInWishlist
  const isInWishlist = (product) =>
    state.wishlist.find(
      (wishlistProduct) => wishlistProduct._id === product._id
    );
  //function for adding and removing item from wishlist
  const handleWishlistToggle = async (e, product) => {
    e.stopPropagation();
    try {
      if (!token) navigate("/login");
      else {
        const res = isInWishlist(product)
          ? await removeFromWishlist(token, product._id)
          : await addToWishlist(token, product);
        dispatch({
          type: UPDATE_WISHLIST,
          payload: { wishlist: res.wishlist },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleWishlistToggle,
    isInWishlist,
    handleWishlist,
  };
}

export { useCartAndWishlist };
