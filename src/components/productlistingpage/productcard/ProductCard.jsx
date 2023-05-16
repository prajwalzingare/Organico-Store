import React from "react";

function ProductCard({ product }) {
  const { title } = product;
  return (
    <div className="">
      <div className="product-card">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default ProductCard;
