import React from "react";
import Filters from "../filters/Filters";
import { useProduct } from "context";
import ProductCard from "../productcard/ProductCard";
import "./productsection.css";
function ProductSection() {
  const { productData } = useProduct();

  return (
    <div className="filters-and-products">
      <Filters />

      {/* {productData.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))} */}
    </div>
  );
}

export default ProductSection;
