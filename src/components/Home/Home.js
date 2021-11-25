import React from "react";
import "./Home.css";
import smart_house from "../../Assets/smart_house.png";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Update your lifestyle </h1>
          <h1> by </h1>
          <h1>Automating Your Home</h1>
        </div>
        <div className="smart_house">
          <img src={smart_house} alt="smart house" />
        </div>
      </div>
      <div className="homeAutomation">
        <div className="what">
          <p id="question">What is Home Automation?</p>
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
          <p id="question">why is Home Automation</p>
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
