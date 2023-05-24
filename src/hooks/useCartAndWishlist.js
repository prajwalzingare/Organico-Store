import { useState } from "react";

function useCartAndWishlist() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return {
    handleButtonClick,
    isFavorite,
  };
}

export { useCartAndWishlist };
