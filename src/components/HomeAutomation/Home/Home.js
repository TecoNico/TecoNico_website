import React from "react";
import "./Home.css";
import smart_house from "../../../Assets/smart_house.png";
import Logo from "../../../Assets/logo.png";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <img src={Logo} alt="Logo" />
          <div className="title-text" style={{ textAlign: "center" }}>
            <h1>Update your lifestyle </h1>
            <h1> by </h1>
            <h1>Automating Your Home</h1>
          </div>
        </div>
        <div className="smart_house">
          <img src={smart_house} alt="smart house" />
        </div>
      </div>
      <div className="homeAutomation">
        <div className="what">
          <p id="question">What is Home Automation?</p>
          <p id="ans">
            Home automation is the automation of your switches and appliances,
            so that they can be controlled by your fingertip from Anywhere.
            These devices are connected to the Internet, which allows them to be
            controlled remotely. It can controlled by app, voice assistant and
            remote. It easy your life by scheduler and timer and automate your
            life.
          </p>
        </div>
        <div className="what">
          <p id="question">Why it is needed?</p>
          <p id="ans">
            you can put your lights on schedules so that they turn off when you
            normally go to sleep, or you can have your thermostat turn the A/C
            up about an hour before you return to work so you don’t have to
            return to a stuffy house. Home automation makes life more convenient
            and can even save you money on heating, cooling and electricity
            bills.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
