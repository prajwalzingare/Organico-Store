import { useProduct } from "context";
import React from "react";
import { useParams } from "react-router-dom";
import "./individualproduct.css";
import {
  LocalShippingIcon,
  PaymentsIcon,
  StarIcon,
  VerifiedIcon,
} from "assets";

function IndividualProduct() {
  const { productId } = useParams();
  const { productData } = useProduct();
  const individualProduct = productData?.find((item) => item._id === productId);

  //   const {
  //     _id,
  //     title,
  //     description,
  //     imgUrl,
  //     rating,
  //     totalReviews,
  //     price,
  //     originalPrice,
  //     isOutOfStock,
  //     isTrending,
  //   } = individualProduct;
  return (
    <div className="flex-grow">
      {individualProduct && (
        <div className="productdetails-main-container">
          <div className="productdetails-middle">
            <div className="productdetails-left">
              <div className="productdetails-img-container">
                <img
                  src={individualProduct?.imgUrl}
                  alt=""
                  className="productdetails-img"
                />
              </div>
            </div>
            <div className="productdetails-right">
              <div className="productdetails-info">
                <p className="productdetails-title">
                  {individualProduct.title}
                </p>
                <p className="productdetails-description">
                  {individualProduct.description}
                </p>
                <p className="productdetails-rating">
                  {individualProduct.rating}{" "}
                  <StarIcon className="productdetails-rating-icon" /> |{" "}
                  {individualProduct.totalReviews} reviews
                </p>
              </div>
              <hr />
              <div className="productdetails-price-container">
                <p className="productdetails-price">
                  ₹{individualProduct.price}
                </p>
                <p className="original-price">
                  ₹ {individualProduct.originalPrice}
                </p>
              </div>

              <p className="productdetails-shipping">
                Shipping calculated at checkout
              </p>
              <hr />
              <div className="productdetails-tag-msg">
                <span className="tag-msg">
                  {" "}
                  <LocalShippingIcon /> Fastest & No Contact Delivery
                </span>
                <span className="tag-msg">
                  {" "}
                  <VerifiedIcon /> Price Includes GST
                </span>
                <span className="tag-msg">
                  {" "}
                  <PaymentsIcon />
                  Cash On Delivery Available
                </span>
              </div>
              <hr />
              <div className="productdetails-button-container">
                <button className="productdetails-add-cart-btn">
                  Add To Cart
                </button>
                <button className="productdetails-add-wishlist-btn">
                  Add To Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { IndividualProduct };
