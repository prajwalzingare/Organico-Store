import axios from "axios";
import { toast } from "react-toastify";

const getWishlist = async (token) => {
  try {
    const res = await axios.get("/api/user/wishlist", {
      headers: { authorization: token },
    });

    if (res.status === 200) {
      console.log(res.data);
      return res.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("getWishlist: Failed to get wishlist", error);
  }
};

const addToWishlist = async (token, product) => {
  try {
    const res = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (res.status === 201) {
      toast.success("Great! The item is now in your wishlist.");
      return res.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error("Failed to add item to wishlist. Please try again.");
    console.log("addToWishlist: Error in adding the Items", error);
  }
};

const removeFromWishlist = async (token, _id) => {
  try {
    const res = await axios.delete(`/api/user/wishlist/${_id}`, {
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      toast.success("Removed from Wishlist");
      return res.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error("Failed to remove item from wishlist.try again");
    console.log(
      " removeFromWishlist: Error in removing item from wishlist",
      error
    );
  }
};

export { getWishlist, addToWishlist, removeFromWishlist };
