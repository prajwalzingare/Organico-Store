import React from "react";
import { Link } from "react-router-dom";
import "./carousal.css";
function Carousal() {
  return (
    <div className="carusal-container">
      <section className="carousel">
        <div className="banner">
          <div className="banner-text">
            <h2>Looking For Chemical Free Product</h2>
            <p>You are on Perfect Place</p>
            <Link to="/products" className="btn">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carousal;
