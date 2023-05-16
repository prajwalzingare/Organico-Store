import React, { useEffect, useState } from "react";
import Carousal from "./carausal/Carousal";
import "./landingpage.css";

function LandingPage() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch("/api/categories");
      const response = await data.json();
      console.log(response);
      setData(response.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
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
            {data.map((item) => {
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
        <div className="landingpage-cards-container">
          <h3 className="heading-3">Featured Product</h3>
          {/* <div className="featured-product-card"></div> */}
          <div className="landingpage-cards">
            {data.map((item) => {
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
      </div>
    </div>
  );
}

export { LandingPage };
