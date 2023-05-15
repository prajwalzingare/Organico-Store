import React from "react";
import Carousal from "./carausal/Carousal";
import "./landingpage.css";

const featuredProductData = [
  {
    title: "Dairy Substitutes",
    url: "https://res.cloudinary.com/dspqnsoy1/image/upload/v1683976235/Ecom%20App-NEOG/Dairy_Substitutes_Catagory_Image_730ec3fc-1e24-4820-81d6-072cf1f75d2d_500x_okpuz9.webp",
    content:
      "Delicious & Healthy, Ready-to-Use, Plant-Based Alternatives to Animal Milk & Dairy Products to help you easily switch to aVegan Diet!",
  },
  {
    title: "Tea-Coffee Replacements",
    url: "https://res.cloudinary.com/dspqnsoy1/image/upload/v1683977213/Ecom%20App-NEOG/tea-coffe-replacment/Tea-Coffee_Replacements_Catagory_Image_00da8716-436b-4e1e-8758-9383dbd24a06_500x_ifhg2n.webp",
    content:
      "Natural, Organically Grown, Caffeine-Free & Chemical-Free Healthy Alternatives to help you overcome Tea/ Coffee Addiction!",
  },
  {
    title: "Plastic Alternatives",
    url: "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684032817/Ecom%20App-NEOG/Plastic%20subtitutes/Plastic_Alternatives_Catagory_Image_without_Border_ba7bad4d-9efb-45be-bfb5-b03df3ea6c99_700x_b29upg.webp",
    content:
      "Range of 100% Eco friendly, Recyclable, Completely Biodegradable, Cruelty-free & Plant-Based Alternatives to daily use Plastic items.",
  },
  {
    title: "Nuts And Seeds",
    url: "https://res.cloudinary.com/dspqnsoy1/image/upload/v1684033066/Ecom%20App-NEOG/nuts%20and%20seeds/Preview-1Cashews_700x_dyonvb.webp",
    content:
      "Purely Natural, Raw, Organic, Unroasted & Unsalted Nuts & Seeds loaded with dense nutrition, in combination with 100% Natural, Unsulphured & Sun-Dried Fruits.",
  },
];
function LandingPage() {
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
            {featuredProductData.map((item) => {
              const { title, url, content } = item;
              return (
                <div className="featured-card">
                  <div className="featured-card-image">
                    <img src={url} alt={title} />
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
            {featuredProductData.map((item) => {
              const { title, url, content } = item;
              return (
                <div className="featured-card">
                  <div className="featured-card-image">
                    <img src={url} alt={title} />
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
