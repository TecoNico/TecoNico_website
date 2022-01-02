import React from "react";
import Health1 from "../../../Assets/images/healthcare/Picture1.png";
import Health2 from "../../../Assets/images/healthcare/Picture2.jpg";
import Health3 from "../../../Assets/images/healthcare/Picture3.jpg";
import Health4 from "../../../Assets/images/healthcare/Picture4.jpg";
import "./ourProduct.css";
const OurProduct = () => {
  return (
    <>
      <h1 id="title">Our Product</h1>
      {/* <div className="ourProduct"> */}
      {/* <div className="teconicoHome">
          <h2>TecoNico Home</h2>
        </div> */}
      <div className="health_product">
        <div className="health_img">
          <img src={Health1} alt="smart house" />
          <img src={Health2} alt="smart house" />
          <img src={Health3} alt="smart house" />
          <img src={Health4} alt="smart house" />
        </div>
      </div>
    </>
  );
};

export default OurProduct;
