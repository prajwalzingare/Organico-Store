import React from "react";
// import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import "./navbar.css";
import {
  PermIdentityOutlinedIcon,
  FavoriteBorderIcon,
  ShoppingCartOutlinedIcon,
  SearchOutlinedIcon,
} from "assets";

function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-left">
            <div className="brand">
              <p className="brand-name">Organico</p>
            </div>
            <a className="buy-now" href="/">
              Buy Now
            </a>
          </div>

          <div className="nav-right">
            <div className="searchbar-container">
              <input
                type="text"
                placeholder="Search for Item"
                className="nav-search-field"
              />
              <button className="btn-no-decoration">
                <SearchOutlinedIcon className="nav-icon" />
              </button>
            </div>
            <div className="nav-icons-container">
              <div className="nav-icons">
                <PermIdentityOutlinedIcon className="nav-icon" />
              </div>
              <div className="nav-icons">
                <FavoriteBorderIcon className="nav-icon" />
              </div>
              <div className="nav-icons ">
                <ShoppingCartOutlinedIcon className="nav-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-search-container">
          <input
            type="text"
            placeholder="Search for items"
            className="nav-search-field"
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
