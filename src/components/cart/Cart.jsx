import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./cart.css";
import { AddShoppingCartIcon } from "assets";

import { useData } from "context";
import { CartItem, CartSummary, CouponModal } from "components";
import { toast } from "react-toastify";

const Cart = () => {
  // State variables
  const [quantity, setQuantity] = useState(1);
  const [coupon, setCoupon] = useState();
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);

  // Other variables
  const navigate = useNavigate();
  const { state } = useData();
  const { cart } = state;

  // Apply the coupon and update the state
  const handleApplyCoupon = () => {
    setIsCouponApplied(true);
    setShowCouponModal(false);
    toast.success("Coupon applied successfully!");
  };

  // Close the coupon modal
  const closeCouponModal = () => {
    setShowCouponModal(false);
  };

  return (
    <div className="cart-container flex-grow">
      <h2 className="cart-title">My Cart</h2>
      {cart.length === 0 ? (
        // Display an empty cart message if the cart is empty
        <div className="cart-empty-message">
          <img
            src="https://res.cloudinary.com/dspqnsoy1/image/upload/v1685850591/Ecom%20App-NEOG/undraw_shopping_bags_rsgo_kehnji.svg"
            alt=""
          />
          <button
            className="cart-moveto-products"
            onClick={() => navigate("/products")}
          >
            <AddShoppingCartIcon className="icon" />
            Add Products
          </button>
        </div>
      ) : (
        // Render the cart items and cart summary
        <div className="cart-items-container">
          <div className="cart-items">
            {cart.map(
              (product) =>
                product && (
                  <CartItem
                    key={product._id}
                    product={product}
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                )
            )}
          </div>
          <CartSummary
            cart={cart}
            quantity={quantity}
            setShowCouponModal={setShowCouponModal}
            isCouponApplied={isCouponApplied}
            coupon={coupon}
          />
        </div>
      )}

      {/* Render coupon modal */}
      <CouponModal
        showCouponModal={showCouponModal}
        handleApplyCoupon={handleApplyCoupon}
        closeCouponModal={closeCouponModal}
        coupon={coupon}
        setCoupon={setCoupon}
        isCouponApplied={isCouponApplied}
      />
    </div>
  );
};

export { Cart };
