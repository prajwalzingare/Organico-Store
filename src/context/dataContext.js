import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "reducer";
import { useProduct } from "./productContext";

const intialState = {
  sortBy: "",
  priceRange: { min: 0, max: 1100 },
  starRating: "",
};

const DataContext = createContext();

function DataProvider({ children }) {
  let { productData } = useProduct();

  const getData = (state) => {
    let productsData = [...productData];
    //for sort input
    if (state.sortBy === "hightolow")
      productsData = productsData.sort(function (a, b) {
        return b.price - a.price;
      });
    else if (state.sortBy === "lowtohigh")
      productsData = productsData.sort(function (a, b) {
        return a.price - b.price;
      });
    else if (state.sortBy === "AtoZ")
      productsData = productsData.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    else if (state.sortBy === "ZtoA")
      productsData = productsData.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    //for price range input
    if (state.priceRange !== "") {
      productsData = productsData.filter((product) => {
        return (
          product.price >= state.priceRange.min &&
          product.price <= state.priceRange.max
        );
      });
    }

    //for star Rating input
    if (state.starRating === "star4-above")
      productsData = productsData.filter((product) => product.rating >= "4");
    else if (state.starRating === "star3-above")
      productsData = productsData.filter((product) => product.rating >= "3");
    else if (state.starRating === "star2-above")
      productsData = productsData.filter((product) => product.rating >= "2");

    return productsData;
  };

  const [filteredProductState, dispatchFilter] = useReducer(
    reducer,
    intialState
  );

  return (
    <div>
      <DataContext.Provider
        value={{
          filteredProductState,
          dispatchFilter,
          data: getData(filteredProductState),
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
}

const useData = () => useContext(DataContext);
export { DataProvider, useData };
