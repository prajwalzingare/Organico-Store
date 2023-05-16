import React, { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [productData, setProductData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      if (response.status === 200) setProductData(data.products);
    } catch (error) {
      console.log("went something wrong in fetching product ", error);
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      if (response.status === 200) setCategoriesData(data.categories);
    } catch (error) {
      console.log("went something wrong in fetching categories", error);
    }
  };
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  return (
    <div>
      <ProductsContext.Provider value={{ productData, categoriesData }}>
        {children}
      </ProductsContext.Provider>
    </div>
  );
}
const useProduct = () => useContext(ProductsContext);

export { ProductsProvider, useProduct };
