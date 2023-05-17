import React from "react";
import { useNavigate } from "react-router-dom";
// import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import "./navbar.css";
import {
  PermIdentityOutlinedIcon,
  FavoriteBorderIcon,
  ShoppingCartOutlinedIcon,
  SearchOutlinedIcon,
} from "assets";

function NavBar() {
  const navigate = useNavigate();
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
            <a className="buy-now" href="/products">
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
