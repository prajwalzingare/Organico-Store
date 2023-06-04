import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import {
  PermIdentityOutlinedIcon,
  FavoriteBorderIcon,
  ShoppingCartOutlinedIcon,
  SearchOutlinedIcon,
} from "assets";
import { useAuth, useData } from "context";
import { SEARCH_ITEM } from "constants";

function NavBar() {
  const { filteredProductState, dispatchFilter, state } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    dispatchFilter({ type: SEARCH_ITEM, payload: e.target.value });
    navigate("/products");
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-left">
            <div className="brand">
              {" "}
              <p className="brand-name" onClick={() => navigate("/")}>
                Organico
              </p>
            </div>
            <Link className="buy-now" to="/products">
              Buy Now
            </Link>
          </div>

          <div className="nav-right">
            <div className="searchbar-container">
              <input
                type="text"
                placeholder="Search for Item"
                className="nav-search-field"
                value={filteredProductState.searchText}
                onChange={handleSearch}
              />
              <button className="btn-no-decoration">
                <SearchOutlinedIcon className="nav-icon" />
              </button>
            </div>
            <div className="nav-icons-container">
              <div className="nav-icons" onClick={() => navigate("/profile")}>
                <PermIdentityOutlinedIcon className="nav-icon" />
              </div>
              <div className="nav-icons" onClick={() => navigate("/wishlist")}>
                <FavoriteBorderIcon className="nav-icon" />
                {state.wishlist.length > 0 && token && (
                  <span className="counter-badge">{state.wishlist.length}</span>
                )}
              </div>
              <div className="nav-icons " onClick={() => navigate("/cart")}>
                <ShoppingCartOutlinedIcon className="nav-icon" />
                {state.cart.length > 0 && token && (
                  <span className="counter-badge">{state.cart.length}</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-search-container">
          <input
            type="text"
            placeholder="Search for items"
            className="nav-search-field"
            value={filteredProductState.searchText}
            onChange={handleSearch}
          />
          <button type="submit" className="btn-no-decoration">
            <SearchOutlinedIcon className="nav-icon" />
          </button>
        </div>
      </nav>
    </>
  );
}

export { NavBar };
