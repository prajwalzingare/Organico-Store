import { UPDATE_CART } from "constants";
import { UPDATE_WISHLIST } from "constants";
import { useAuth, useData } from "context";

import { useNavigate } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
} from "services";

function useCartAndWishlist() {
  const { token } = useAuth();
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  //for carts
  const handleCart = async (e, product) => {
    e.preventDefault();
    try {
      const res = await removeFromCart(token, product._id);
      dispatch({
        type: UPDATE_CART,
        payload: { cart: res.cart },
      });
    } catch (error) {
      console.log(error);
    }
  };
  //function for checking Item isInCart
  const isInCart = (product) =>
    state.cart.find((cartProduct) => cartProduct._id === product._id);

  //function for adding and removing item from wishlist
  const handleCartToggle = async (e, product, setDisable) => {
    e.stopPropagation();
    setDisable(true);
    try {
      if (!token) navigate("/login");
      else {
        const res = isInCart(product)
          ? await removeFromCart(token, product._id)
          : await addToCart(token, product);
        dispatch({
          type: UPDATE_CART,
          payload: { cart: res.cart },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDisable(false);
    }
  };

  //handle wishlist Item removel from wishlist
  const handleWishlist = async (e, product) => {
    e.preventDefault();
    e.stopPropagation();
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
  const handleWishlistToggle = async (e, product, setDisable) => {
    e.stopPropagation();
    setDisable(true);
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
    } finally {
      setDisable(false);
    }
  };

  return {
    handleWishlistToggle,
    isInWishlist,
    handleWishlist,
    isInCart,
    handleCartToggle,
    handleCart,
  };
}

export { useCartAndWishlist };
