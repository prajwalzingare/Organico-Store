import React from "react";

import Carousal from "./carausal/Carousal";
import "./landingpage.css";
import { useProduct } from "context";
import { StarIcon } from "assets";

function LandingPage() {
  const { productData, categoriesData } = useProduct();

  const feturedProduct = productData
    .filter((item) => item.rating === "5")
    .slice(0, 4);

  return (
    <div>
      <div className="middle-container">
        <div>
          <Carousal />
        </div>
        {/* cards */}
        <div className="landingpage-cards-container">
          <h3 className="heading-3">Our Featured Collections</h3>
          <div className="landingpage-cards">
            {categoriesData?.map((item) => {
              const { title, imgUrl, content } = item;
              return (
                <div className="featured-card">
                  <div className="featured-card-image">
                    <img src={imgUrl} alt={title} />
                  </div>
                  <div className="featured-card-details">
                    <p className="featured-card-title">{title}</p>
                    <p className="featured-card-description">{content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* fetured product card  */}
        <div className="landingpage-cards-container">
          <h3 className="heading-3">Featured Product</h3>
          <div className="landingpage-cards">
            {feturedProduct?.map((item) => {
              const { title, imgUrl, description, rating, totalReviews } = item;
              return (
                <div className="fp-card">
                  <div className="featured-card-image">
                    <img src={imgUrl} alt={title} />
                  </div>
                  <div className="fp-content">
                    <p className="fp-description">{description}</p>

                    <p className="fp-rating">
                      {rating} <StarIcon className="fp-icon" /> | {totalReviews}{" "}
                      reviews
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export { LandingPage };
