import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "reducer";
import { useProduct } from "./productContext";

const intialState = {
  sortByPrice: "",
};

const DataContext = createContext();

function DataProvider({ children }) {
  let { productData } = useProduct();

  const getData = (state) => {
    if (state.sortByPrice === "hightolow")
      productData = productData.sort(function (a, b) {
        return b.price - a.price;
      });
    else if (state.sortByPrice === "lowtohigh")
      productData = productData.sort(function (a, b) {
        return a.price - b.price;
      });
    return productData;
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
