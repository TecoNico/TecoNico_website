import React from "react";
import "./OurProject.css";
// import Demo from "../HomeAutomation/Demo/Demo";
import Smart from "../../Assets/contact.png";
import DemoImg from "../../Assets/images/s1.png";
import Img from "../../Assets/contact.png";

import Click from "../../Assets/click.gif";
export const Ourproject = () => {
  return (
    <>
      <h1 align="center" style={{ marginTop: "5%" }}>
        Our Project
      </h1>
      <div className="OurProducts">
        <div className="Products item1">
          <a href="/1" target="_blank">
            <img src={Smart} alt="home-automation" style={{ width: "100%" }} />
            <img src={Click} class="img-hov" alt="Card Front" />
          </a>
        </div>
        <div className="Products item2">
          <img src={DemoImg} alt="home-automation" style={{ width: "100%" }} />
          <img src={Click} class="img-hov" alt="Card Front" />
        </div>
        <div className="Products item3">
          <img src={Img} alt="home-automation" style={{ width: "100%" }} />
          <img src={Click} class="img-hov" alt="Card Front" />
        </div>
        <div className="Products item4">
          <img src={Img} alt="home-automation" style={{ width: "100%" }} />
          <img src={Click} class="img-hov" alt="Card Front" />
        </div>
      </div>
    </>
  );
};
