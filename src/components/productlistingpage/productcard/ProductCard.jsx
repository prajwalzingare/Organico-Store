import {
  AddShoppingCartIcon,
  FavoriteBorderOutlinedIcon,
  StarIcon,
} from "assets";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./productcard.css";
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

          <button className="product-card-wishlist-btn">
            {" "}
            <FavoriteBorderOutlinedIcon />
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
          ) : (
            <button className="card-btn">
              {" "}
              <AddShoppingCartIcon className="add-cart-icon" /> Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
