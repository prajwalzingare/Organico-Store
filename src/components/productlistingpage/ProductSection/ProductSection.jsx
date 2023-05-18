import React from "react";
import Filters from "../filters/Filters";
import { useData } from "context";
import ProductCard from "../productcard/ProductCard";
import "./productsection.css";
function ProductSection() {
  // const { productData } = useProduct();
  const { data } = useData();

  return (
    <div className="filters-and-products">
      <div>
        <Filters />
      </div>
      <div className="product-cards">
        {data.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
