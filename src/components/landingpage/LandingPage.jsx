import React from "react";
import { useNavigate } from "react-router-dom";
import Carousal from "./carausal/Carousal";
import "./landingpage.css";
import { useData, useProduct } from "context";
import { StarIcon } from "assets";
import { FILTER_BY_CATEGORY } from "constants";

function LandingPage() {
  const { productData, categoriesData } = useProduct();
  const { dispatchFilter } = useData();
  const feturedProduct = productData
    .filter((item) => item.rating === "5")
    .slice(0, 4);
  const navigate = useNavigate();
  return (
    <div>
      <div className="middle-container">
        <div>
          <Carousal />
        </div>
        {/*Our Featured Collections card */}
        <div className="landingpage-cards-container">
          <h3 className="heading-3">Our Featured Collections</h3>
          <div className="landingpage-cards">
            {categoriesData?.map((item) => {
              const { title, imgUrl, content, categoryName } = item;

              return (
                <div
                  key={title}
                  className="featured-card"
                  onClick={() => {
                    dispatchFilter({
                      type: FILTER_BY_CATEGORY,
                      payload: categoryName,
                    });
                    navigate("/products");
                  }}
                >
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
              const { _id, title, imgUrl, description, rating, totalReviews } =
                item;
              return (
                <div
                  className="fp-card"
                  key={_id}
                  onClick={() => navigate(`/product/${_id}`)}
                >
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
