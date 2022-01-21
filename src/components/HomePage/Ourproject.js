import React from "react";
import "./OurProject.css";
// import Demo from "../HomeAutomation/Demo/Demo";
import Smart from "../../Assets/contact.png";
import DemoImg from "../../Assets/images/s1.png";
import Img from "../../Assets/contact.png";
import Attendence from "../../Assets/attendence.jpg";
import Click from "../../Assets/click.gif";
import Health from "../../Assets/Health.png";
import Drowsiness from "../../Assets/drowsiness.png";
export const Ourproject = () => {
  return (
    <>
      <h1 align="center" style={{ marginTop: "5%" }}>
        Our Project
      </h1>
      <div className="OurProducts">
        <div className="Products item1">
          <a href="/homeautomation">
            <img src={Smart} className="img-main1" alt="home-automation" />
            <img src={Click} class="img-hov" alt="Card Front" />
          </a>
        </div>
        <div className="Products item2">
          <a href="/attendenceSystem">
            <img src={Attendence} className="img-main2" alt="attendence" />
            <img src={Click} class="img-hov" alt="Card Front" />
          </a>
        </div>
        <div className="Products item3">
          <a href="/Drowsiness">
            <img src={Drowsiness} className="img-main3" alt="Drownsiness" />
            <img src={Click} class="img-hov" alt="Card Front" />
          </a>
        </div>
        <div className="Products item4">
          <a href="/healthcare">
            <img src={Health} alt="HealthCare" className="img-main4" />
            <img src={Click} class="img-hov" alt="Card Front" />
          </a>
        </div>
      </div>
    </>
  );
};
