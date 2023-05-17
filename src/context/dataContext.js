import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "reducer";
import { useProduct } from "./productContext";
const DataContext = createContext();
function DataProvider({ children }) {
  const { productData } = useProduct();

  const intialState = {
    sortByPrice: null,
  };

  const [filteredProductState, dispatchFilter] = useReducer(
    reducer,
    intialState
  );
  //for sort
  const processedDataBySort = productData.sort((a, b) =>
    filteredProductState.sortByPrice === "hightolow"
      ? b.price - a.price
      : filteredProductState.sortByPrice === "lowtohigh"
      ? a.price - b.price
      : productData
  );

  return (
    <div>
      <DataContext.Provider
        value={{ filteredProductState, dispatchFilter, processedDataBySort }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
}

const useData = () => useContext(DataContext);
export { DataProvider, useData };
