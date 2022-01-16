import React from "react";
import Product2 from "../../../Assets/product2.png";
import "./ourProduct.css";
const OurProduct = () => {
  return (
    <>
      <div className="ourProduct">
        <div className="teconicoHome">
          <h2>TecoNico App</h2>
          <p>
            Let’s smart your life and your home by making it’s smart with your
            fingertip. You can add TecoHome devices and control them from
            Anywhere in the world. Also you can control TecoHome devices if you
            does not have internet with our app.
          </p>
        </div>
        <div className="productImg">
          <img src={Product2} alt="smart house" />
        </div>
      </div>
    </>
  );
};

export default OurProduct;
