import React from "react";
import "./wishlist.css";
import { useProduct } from "context";
import {
  AddShoppingCartIcon,
  DeleteOutlineOutlinedIcon,
  StarIcon,
} from "assets";
import { useNavigate } from "react-router-dom";
function WishList() {
  const { productData } = useProduct();
  const navigate = useNavigate();
  return (
    <div className="flex-grow">
      <div className="wishlist-main-container">
        <h1 className="wishlist-heading">My Wishlist</h1>
        {productData.length > 0 ? (
          productData.map((product) => (
            <div className="wishlist-card" key={product._id}>
              <div className="wishlist-img-container">
                <img src={product.imgUrl} alt="" />
              </div>
              <div className="wishlist-details-container">
                <p className="wishlist-title">{product.title}</p>

                <p className="wishlist-rating">
                  {" "}
                  {product.rating} <StarIcon /> | {product.totalReviews} reviews
                </p>
                <p className="wishlist-price">₹{product.price}</p>
                <div className="wishlist-button-container">
                  <button className="move-to-cart-button">Move To Cart</button>
                </div>
              </div>
              <button className="Wishlist-clear-btn">
                {" "}
                <DeleteOutlineOutlinedIcon />{" "}
              </button>
            </div>
          ))
        ) : (
          <div>
            <div className="wishlist-empty-container">
              <h2 className="empty-wishlist-heading">
                {" "}
                Your wishlist is empty. Start adding items to your wishlist.
              </h2>
              <div className="wishlist-emptyimage-container">
                {" "}
                <img
                  src="https://res.cloudinary.com/dspqnsoy1/image/upload/v1684684037/Ecom%20App-NEOG/undraw_online_gallery_re_3098_nlq1vz.svg"
                  alt=""
                />
              </div>

              <button
                className="whishlist-add-products"
                onClick={() => navigate("/products")}
              >
                <AddShoppingCartIcon className="icon" />
                Add Products
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { WishList };
