import React, { useState } from "react";
import "./filters.css";

function Filters() {
  const [displayMobileFilters, setDisplayMobileFilters] = useState(false);
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
              className="btn-link btn-link-primary btn-no-decoration"
              onClick={() => setDisplayMobileFilters(!displayMobileFilters)}
            >
              APPLY
            </button>
          ) : (
            <span>FILTERS</span>
          )}
          <button className="btn-clear-filter">CLEAR</button>
        </div>

        <hr />
        {/* for sort filter  */}
        <div className="filter-price">
          <p className="filter-heading">Sort</p>
          <div>
            <input type="radio" id="hightolow" name="sort" />
            <label htmlFor="hightolow" className="filters-label-text">
              {" "}
              Price High To Low
            </label>
          </div>

          <div>
            <input type="radio" id="lowtohigh" name="sort" />
            <label htmlFor="lowtohigh" className="filters-label-text">
              {" "}
              Price Low To High
            </label>
          </div>
        </div>

        <hr />
        {/* for price Range  */}
        <div className="filter-price-range">
          <p className="filter-heading"> Price Range</p>
          <input type="range" />
        </div>
        <hr />
        {/* filter for Rating  */}
        <div className="filter-rating">
          <p className="filter-heading">Rating</p>
          <div>
            <input type="radio" id="star4andAbove" name="rating" />
            <label htmlFor="star4andAbove" className="filters-label-text ">
              {" "}
              4 ⭐️ and above{" "}
            </label>
          </div>
          <div>
            <input type="radio" id="star3andAbove" name="rating" />
            <label htmlFor="star3andAbove" className="filters-label-text">
              {" "}
              3 ⭐️ and above{" "}
            </label>
          </div>
          <div>
            <input type="radio" id="star2andAbove" name="rating" />
            <label htmlFor="star2andAbove" className="filters-label-text">
              {" "}
              2 ⭐️ and above{" "}
            </label>
          </div>
        </div>

        {/* filter for Categories  */}
        <hr />
        <div className="filter-categories">
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
