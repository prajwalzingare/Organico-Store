import React, { useState } from "react";
import "./wishlist.css";
import { useData } from "context";
import {
  AddShoppingCartIcon,
  DeleteOutlineOutlinedIcon,
  ShoppingCartCheckoutRoundedIcon,
  StarIcon,
} from "assets";
import { useNavigate } from "react-router-dom";
import { useCartAndWishlist } from "hooks";
function WishList() {
  const { state } = useData();
  const { handleWishlist, handleCartToggle } = useCartAndWishlist();
  const navigate = useNavigate();
  const [cartLoadingState, setCartLoadingState] = useState(false);

  return (
    <div className="flex-grow">
      <div className="wishlist-main-container">
        <h1 className="wishlist-heading">My Wishlist</h1>
        {state.wishlist.length > 0 ? (
          [...state.wishlist].map((product) => (
            <div
              className="wishlist-card"
              onClick={() => navigate(`/product/${product._id}`)}
              key={product._id}
            >
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
                  {state.cart.some((item) => item._id === product._id) ? (
                    <button
                      className="move-to-cart-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/cart");
                      }}
                    >
                      <ShoppingCartCheckoutRoundedIcon className="icon" />
                      Go To Cart
                    </button>
                  ) : (
                    <button
                      className="move-to-cart-button"
                      disabled={cartLoadingState}
                      onClick={(e) =>
                        handleCartToggle(e, product, setCartLoadingState)
                      }
                    >
                      <AddShoppingCartIcon className="icon" />
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
              <button
                className="Wishlist-clear-btn"
                onClick={(e) => handleWishlist(e, product)}
              >
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
