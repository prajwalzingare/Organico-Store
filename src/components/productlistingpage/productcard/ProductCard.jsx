import { AddShoppingCartIcon, StarIcon } from "assets";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./productcard.css";
function ProductCard({ product }) {
  const { _id, title, imgUrl, price, originalPrice, rating, totalReviews } =
    product;
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
          {/* <FavoriteBorderOutlinedIcon /> */}
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
          <button className="card-btn">
            {" "}
            <AddShoppingCartIcon className="add-cart-icon" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
