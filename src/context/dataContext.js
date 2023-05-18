import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "reducer";
import { useProduct } from "./productContext";

const intialState = {
  sortBy: "",
};

const DataContext = createContext();

function DataProvider({ children }) {
  let { productData } = useProduct();

  const getData = (state) => {
    let productsData = [...productData];
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
