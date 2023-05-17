import { StarIcon } from "assets";
import React from "react";
import "./productcard.css";
function ProductCard({ product }) {
  const {
    _id,
    title,
    description,
    imgUrl,
    price,
    originalPrice,
    rating,
    totalReviews,
    categoryName,
    isOutOfStock,
  } = product;
  return (
    <div>
      <div className="product-card">
        <div className="product-card-img-container">
          <img src={imgUrl} alt="" />
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
          <button className="card-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
