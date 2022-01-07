import React from "react";
import Product1 from "../../../Assets/Product1.png";
import OurProduct2 from "./OurProduct2";
import "./ourProduct.css";
const OurProduct = () => {
  return (
    <>
      <h1 id="title">Our Product</h1>
      <div className="ourProduct">
        <div className="teconicoHome">
          <h2>TecoNico Home</h2>
          <p>
            TecoHome has variety of devices by varying it’s functionalities. It
            has single node which has light and heavy versions, four node with
            fan regulation and with fan regulation. You can control it from our
            App from Anywhere in the World. Also, it can be controlled by ALEXA
            and Google Home and IR Remote. It make your life easier by its
            scheduler and timer functions, so it can automatically turn on/off
            your devices.
          </p>
        </div>
        <div className="productImg">
          <img src={Product1} alt="smart house" />
        </div>
      </div>
      <OurProduct2 />
    </>
  );
};

export default OurProduct;
