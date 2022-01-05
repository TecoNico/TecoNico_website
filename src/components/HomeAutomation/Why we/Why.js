import React from "react";
import "./why.css";
import YoutubeEmbed from "../../Youtube/YoutubeEmbed";
const Why = () => {
  return (
    <div className="Why_me">
      <h1 id="mb">Why Me?</h1>
      {/*<div className="container">
        <Affordable />
        <Affordable />
        <Affordable />
        <Affordable />
        <Affordable />
        <Affordable />
      </div> */}
      <div className="homeAutomation1">
        <div className="what1">
          <p id="work1">How our product works?</p>
          <p id="sample">
            TecoHome is a small device which can fit inside your switch board
            and install it in less than 10 min and also it does not change your
            existing your board functionality instead it makes your switch board
            smart. You can control it from our App from Anywhere in the World.
            Also, it can be controlled by ALEXA and Google Home and IR Remote.
            It make your life easier by its scheduler and timer functions, so it
            can automatically turn on/off your devices.
          </p>

          <div className="home_readmore">
            <a href="/1" target="_blank">
              {"Demo"}
            </a>
          </div>
        </div>
        <div className="what1 ">
          <h1 id="video">
            <YoutubeEmbed embedId="ciQ72w-TRBc" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Why;
