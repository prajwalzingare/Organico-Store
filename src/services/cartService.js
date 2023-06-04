import axios from "axios";
import { toast } from "react-toastify";
const getCart = async (token) => {
  try {
    const res = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

const addToCart = async (token, product) => {
  try {
    const res = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (res.status === 201) {
      toast.success("Great! The item is now in your cart.");
      return res.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error("Failed to add item to cart. Please try again.");
    console.log("addToCart: Error in adding the Items", error);
  }
};

const removeFromCart = async (token, _id) => {
  try {
    const res = await axios.delete(`/api/user/cart/${_id}`, {
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      toast.success("Removed from Cart");
      return res.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error("Failed to remove item from Cart.try again");
    console.log(" removeFromCart: Error in removing item from cart", error);
  }
};

export { getCart, addToCart, removeFromCart };
