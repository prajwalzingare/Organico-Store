import React, { useState } from "react";
import "./filters.css";
import { useData } from "context";

//constants from constant file for filter state
import {
  SORT_PRODUCTS,
  CLEAR_FILTERS,
  PRICE_RANGE,
  SORT_BY_RATING,
  FILTER_BY_CATEGORY,
  TOGGLE_STOCK,
} from "constants";

function Filters() {
  //for toggling filters class for mobile
  const [displayMobileFilters, setDisplayMobileFilters] = useState(false);
  //dispatchFilter function for dispatching the action
  const { filteredProductState, dispatchFilter } = useData();

  return (
    <div>
      <section
        className={
          displayMobileFilters ? "mobile-filters-container" : "filters"
        }
      >
        <div className="filters-header">
          {displayMobileFilters ? (
            <button
              className="btn-Apply-filter"
              onClick={() => setDisplayMobileFilters(!displayMobileFilters)}
            >
              APPLY
            </button>
          ) : (
            <span>FILTERS</span>
          )}
          <button
            onClick={() => dispatchFilter({ type: CLEAR_FILTERS })}
            className="btn-clear-filter"
          >
            CLEAR
          </button>
        </div>

        <hr />
        {/*Filters For Sort by Price  */}
        <div className="filter-price">
          <p className="filter-heading">Sort</p>
          <div>
            <input
              type="radio"
              id="hightolow"
              name="sort"
              value="hightolow"
              className="filter-input"
              checked={filteredProductState.sortBy === "hightolow"}
              onChange={(e) =>
                dispatchFilter({ type: SORT_PRODUCTS, payload: e.target.value })
              }
            />
            <label htmlFor="hightolow" className="filters-label-text">
              {" "}
              Price High To Low
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="lowtohigh"
              name="sort"
              value="lowtohigh"
              className="filter-input"
              checked={filteredProductState.sortBy === "lowtohigh"}
              onChange={(e) =>
                dispatchFilter({ type: SORT_PRODUCTS, payload: e.target.value })
              }
            />
            <label htmlFor="lowtohigh" className="filters-label-text">
              {" "}
              Price Low To High
            </label>
          </div>
        </div>
        <hr />
        {/* Filters for Sort by Alphabetically  */}
        <div className="filter-alphabetically">
          <p className="filter-heading">Sort Alphabetically</p>
          <div>
            <input
              type="radio"
              id="AtoZ"
              name="sort"
              value="AtoZ"
              className="filter-input"
              checked={filteredProductState.sortBy === "AtoZ"}
              onChange={(e) =>
                dispatchFilter({ type: SORT_PRODUCTS, payload: e.target.value })
              }
            />
            <label htmlFor="AtoZ" className="filters-label-text">
              {" "}
              Alphabetically : A to Z
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="ZtoA"
              name="sort"
              value="ZtoA"
              className="filter-input"
              checked={filteredProductState.sortBy === "ZtoA"}
              onChange={(e) =>
                dispatchFilter({ type: SORT_PRODUCTS, payload: e.target.value })
              }
            />
            <label htmlFor="ZtoA" className="filters-label-text">
              {" "}
              Alphabetically : Z to A
            </label>
          </div>
        </div>

        <hr />
        {/*Filters for price Range  */}
        <div className="filter-price-range">
          <p className="filter-heading"> Price Range</p>
          <div className="filter-slider-label">
            <p className="text-secondary-color">0</p>
            <p className="text-secondary-color">500</p>
            <p className="text-secondary-color">1100</p>
          </div>
          <input
            type="range"
            name="rangeInput"
            value={filteredProductState.priceRange.max}
            min={filteredProductState.priceRange.min}
            max="1110"
            step="100"
            className="filter-input"
            onChange={(e) =>
              dispatchFilter({
                type: PRICE_RANGE,
                payload: {
                  ...filteredProductState.priceRange,
                  max: parseInt(e.target.value),
                },
              })
            }
          />
        </div>
        <hr />
        {/* filters for Rating  */}
        <div className="filter-rating">
          <p className="filter-heading">Rating</p>
          <div>
            <input
              type="radio"
              id="star4andAbove"
              value="star4-above"
              name="rating"
              className="filter-input"
              checked={filteredProductState.starRating === "star4-above"}
              onChange={(e) =>
                dispatchFilter({
                  type: SORT_BY_RATING,
                  payload: e.target.value,
                })
              }
            />
            <label htmlFor="star4andAbove" className="filters-label-text ">
              {" "}
              4 ⭐️ and above{" "}
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="star3andAbove"
              value="star3-above"
              name="rating"
              className="filter-input"
              checked={filteredProductState.starRating === "star3-above"}
              onChange={(e) =>
                dispatchFilter({
                  type: SORT_BY_RATING,
                  payload: e.target.value,
                })
              }
            />
            <label htmlFor="star3andAbove" className="filters-label-text">
              {" "}
              3 ⭐️ and above{" "}
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="star2andAbove"
              value="star2-above"
              name="rating"
              className="filter-input"
              checked={filteredProductState.starRating === "star2-above"}
              onChange={(e) =>
                dispatchFilter({
                  type: SORT_BY_RATING,
                  payload: e.target.value,
                })
              }
            />
            <label htmlFor="star2andAbove" className="filters-label-text">
              {" "}
              2 ⭐️ and above{" "}
            </label>
          </div>
        </div>

        {/* filters for Categories  */}
        <hr />
        <div className="filter-categories">
          <p className="filter-heading"> Categories</p>
          <div>
            <input
              type="checkbox"
              id="dairy-substitutes"
              value="Dairy_Substitutes"
              checked={filteredProductState.selectedCategory.includes(
                "Dairy_Substitutes"
              )}
              onChange={(e) =>
                dispatchFilter({
                  type: FILTER_BY_CATEGORY,
                  payload: e.target.value,
                })
              }
            />
            <label htmlFor="dairy-substitutes" className="filters-label-text">
              Dairy Substitutes
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="tea-coffee-replacements"
              value="Tea_Coffee_Replacements"
              checked={filteredProductState.selectedCategory.includes(
                "Tea_Coffee_Replacements"
              )}
              onChange={(e) =>
                dispatchFilter({
                  type: FILTER_BY_CATEGORY,
                  payload: e.target.value,
                })
              }
            />
            <label
              htmlFor="tea-coffee-replacements"
              className="filters-label-text"
            >
              Tea Coffee Replacements
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="nutsandseeds"
              value="Nuts_And_Seeds"
              checked={filteredProductState.selectedCategory.includes(
                "Nuts_And_Seeds"
              )}
              onChange={(e) =>
                dispatchFilter({
                  type: FILTER_BY_CATEGORY,
                  payload: e.target.value,
                })
              }
            />
            <label htmlFor="nutsandseeds" className="filters-label-text">
              Nuts Seeds and Dry Fruits
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="plastic-alternatives"
              value="Plastic_Alternatives"
              checked={filteredProductState.selectedCategory.includes(
                "Plastic_Alternatives"
              )}
              onChange={(e) =>
                dispatchFilter({
                  type: FILTER_BY_CATEGORY,
                  payload: e.target.value,
                })
              }
            />
            <label
              htmlFor="plastic-alternatives"
              className="filters-label-text"
            >
              Plastic Alternatives
            </label>
          </div>
        </div>
        {/* filter include outofstock  */}
        <hr />
        <div className="filter-includeoutofstock">
          <span className="filter-heading">OTHER</span>
          <div>
            <input
              type="checkbox"
              id="outofstock"
              checked={filteredProductState.isOutOfStock}
              onChange={() => dispatchFilter({ type: TOGGLE_STOCK })}
            />
            <label htmlFor="outofstock" className="filters-label-text">
              Include Out Of Stock
            </label>
          </div>
        </div>
      </section>
      {/* Mobile filter panel  */}
      <div className="mobile-filter-panel">
        <div
          className="mobile-filter-header"
          onClick={() => setDisplayMobileFilters(!displayMobileFilters)}
        >
          FILTERS
        </div>
        <div>
          <button
            className="btn-clear-filter"
            onClick={() => dispatchFilter({ type: CLEAR_FILTERS })}
          >
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
