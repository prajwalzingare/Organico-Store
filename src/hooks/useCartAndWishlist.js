import React, { useState } from "react";
import { toast } from "react-toastify";

function useCartAndWishlist() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast.success("Added to wishlist");
  };

  return {
    handleButtonClick,
    isFavorite,
  };
}

export { useCartAndWishlist };
