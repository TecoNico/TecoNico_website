import React from "react";
import "./Home.css";
import Health from "../../Assets/Health.png";
import Logo from "../../Assets/logo.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <img src={Logo} alt="smart house" />
          <h1>Healthcare </h1>
          <h1> Using AI</h1>
        </div>
        <div className="smart_house">
          <img src={Health} alt="smart house" />
        </div>
      </div>
      <div className="homeAutomation">
        <div className="what">
          <p id="question">What is the uee of AI in Healthcare?</p>
          <p id="ans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariaturs. Excepteur sint occaecat cupidatat
          </p>
        </div>
        <div className="what">
          <p id="question">How can we ?</p>
          <p id="ans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariaturs. Excepteur sint occaecat cupidatat
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
