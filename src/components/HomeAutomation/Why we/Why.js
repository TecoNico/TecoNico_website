import React from "react";
import Affordable from "./Affordable";
import "./why.css";
const Why = () => {
  return (
    <div className="Why_me">
      <h1 id="mb">Why Me?</h1>
      <div className="container">
        <Affordable />
        <Affordable />
        <Affordable />
        <Affordable />
        <Affordable />
        <Affordable />
      </div>
      <div className="homeAutomation1">
        <div className="what1">
          <p id="work1">How our product works?</p>
          <p id="sample">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariaturs. Excepteur sint occaecat cupidatat
          </p>
        </div>
        <div className="what1 video">
          <h1 id="video">
            <a href="/1">Demo Page </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Why;
