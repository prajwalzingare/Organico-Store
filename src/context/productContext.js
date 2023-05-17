import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [productData, setProductData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get("/api/products");
      if (response.status === 200) setProductData(response.data.products);
      response = await axios.get("/api/categories");
      if (response.status === 200) setCategoriesData(response.data.categories);
    } catch (error) {
      console.log("Went something wromg in fetching product", error);
    }
  };

  useEffect(() => {
    fetchData();
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
