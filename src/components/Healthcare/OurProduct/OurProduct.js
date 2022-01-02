import React from "react";
import Health1 from "../../../Assets/images/healthcare/Picture1.png";
import Health2 from "../../../Assets/images/healthcare/Picture2.jpg";
import Health3 from "../../../Assets/images/healthcare/Picture3.jpg";
import Health4 from "../../../Assets/images/healthcare/Picture4.jpg";
import "./ourProduct.css";
const OurProduct = () => {
  return (
    <>
      <h1 id="title2">Our Product</h1>
      <div className="HealthProduct">
        <div className="healthImg">
          <img src={Health1} alt="smart house" />
        </div>
        <div className="healthImg">
          <img src={Health2} alt="smart house" />
        </div>
        <div className="healthImg">
          <img src={Health3} alt="smart house" />
        </div>
        <div className="healthImg">
          <img src={Health4} alt="smart house" />
        </div>
      </div>
    </>
  );
};

export default OurProduct;
