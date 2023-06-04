import React, { useState } from "react";
import {
  AddShoppingCartIcon,
  FavoriteBorderOutlinedIcon,
  FavoriteIcon,
  RemoveShoppingCartOutlinedIcon,
  ShoppingCartCheckoutRoundedIcon,
  StarIcon,
} from "assets";

import { useNavigate } from "react-router-dom";

import "./productcard.css";
import { useCartAndWishlist } from "hooks";

function ProductCard({ product }) {
  const {
    _id,
    title,
    imgUrl,
    price,
    originalPrice,
    rating,
    totalReviews,
    isOutOfStock,
    isTrending,
  } = product;

  const { handleWishlistToggle, isInWishlist, isInCart, handleCartToggle } =
    useCartAndWishlist();
  const [cartLoadingState, setCartLoadingState] = useState(false);
  const [wishlistLoadingState, setWishlistLoadingState] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <div
        className="product-card"
        key={_id}
        onClick={() => navigate(`/product/${_id}`)}
      >
        <div className="product-card-img-container">
          <img src={imgUrl} alt="" />
          {isTrending && <span className="trending-badge">Trending</span>}

          <button
            className="product-card-wishlist-btn"
            disabled={wishlistLoadingState}
            onClick={(e) =>
              handleWishlistToggle(e, product, setWishlistLoadingState)
            }
          >
            {" "}
            {isInWishlist(product) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderOutlinedIcon style={{ color: "black" }} />
            )}
          </button>
          <span></span>
        </div>

        <div className="product-card-details">
          <p className="product-card-title">{title}</p>
          <div className="product-card-prices">
            <p className="price">₹{price}</p>
            {originalPrice && (
              <p className="original-price">₹ {originalPrice}</p>
            )}
          </div>

          <p className="product-card-rating">
            {rating} <StarIcon className="fp-icon" /> | {totalReviews} reviews
          </p>
        </div>
        <div className="product-card-buttons">
          {isOutOfStock ? (
            <button className="card-btn  btn-outOfStock" disabled>
              <RemoveShoppingCartOutlinedIcon className="add-cart-icon" />
              Out Of Stock
            </button>
          ) : !isInCart(product) ? (
            <button
              className="card-btn"
              disabled={cartLoadingState}
              onClick={(e) => handleCartToggle(e, product, setCartLoadingState)}
            >
              <AddShoppingCartIcon className="add-cart-icon" /> Add To Cart
            </button>
          ) : (
            <button
              className="card-btn"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/cart");
              }}
            >
              {" "}
              <ShoppingCartCheckoutRoundedIcon className="add-cart-icon" /> Go
              To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
