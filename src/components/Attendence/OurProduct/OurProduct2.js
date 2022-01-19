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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisiLorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi
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
