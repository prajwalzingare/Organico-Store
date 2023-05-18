import React, { useState } from "react";
import "./filters.css";
import { useData } from "context";
//constants from constant file for filter state
import { SORT_PRODUCTS, CLEAR_FILTERS } from "constants";

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
        {/* for sort filter  */}
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
        {/* filter by Alphabetically  */}
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
        {/* for price Range  */}
        <div className="filter-price-range">
          <p className="filter-heading"> Price Range</p>
          <input type="range" className="filter-input" />
        </div>
        <hr />
        {/* filter for Rating  */}
        <div className="filter-rating">
          <p className="filter-heading">Rating</p>
          <div>
            <input
              type="radio"
              id="star4andAbove"
              name="rating"
              className="filter-input"
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
              name="rating"
              className="filter-input"
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
              name="rating"
              className="filter-input"
            />
            <label htmlFor="star2andAbove" className="filters-label-text">
              {" "}
              2 ⭐️ and above{" "}
            </label>
          </div>
        </div>

        {/* filter for Categories  */}
        <hr />
        <div className="filter-categories">
          <p className="filter-heading"> Categories</p>
          <div>
            <input type="checkbox" id="dairy-substitutes" />
            <label htmlFor="dairy-substitutes" className="filters-label-text">
              Dairy Substitutes
            </label>
          </div>
          <div>
            <input type="checkbox" id="tea_coffee_replacements" />
            <label
              htmlFor="tea-coffee-replacements"
              className="filters-label-text"
            >
              Tea Coffee Replacements
            </label>
          </div>
          <div>
            <input type="checkbox" id="nutsandseeds" />
            <label htmlFor="nutsandseeds" className="filters-label-text">
              Nuts Seeds and Dry Fruits
            </label>
          </div>
          <div>
            <input type="checkbox" id="plastic-alternatives" />
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
          <div>
            <input type="checkbox" id="outofstock" />
            <label htmlFor="outofstock" className="filters-label-text">
              Include Out Of Stock
            </label>
          </div>
        </div>
      </section>

      <div className="mobile-filter-panel">
        <div
          className="mobile-filter-header"
          onClick={() => setDisplayMobileFilters(!displayMobileFilters)}
        >
          FILTERS
        </div>
        <div>
          <button className="btn-clear-filter">CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
