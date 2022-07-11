import React from "react";
import "./Home.css";
import Drowsiness from "../../../Assets/drowsiness/Asset3.png";
// import Dotbg from "../../../Assets/drowsiness/bg.png";
import ng from "../../../Assets/drowsiness/ng.png";
import mdweb from "../../../Assets/drowsiness/mdweb.png";
import nitin_profile from "../../../Assets/drowsiness/ngprofile.jpeg";
import demo from "../../../Assets/drowsiness/d3.gif";
const Home = () => {
  const KnowMore = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="drowsiness-home ">
        <div className="drowsiness-bg">
          <div className="drowsiness-text">
            <h1>DRIVE SAFE</h1>
            <p>YOUR LIFE MATTERS</p>
            <p>AND OTHERS AS WELL</p>
            <div className="know-button" onClick={KnowMore}>
              know more
            </div>
          </div>
        </div>
      </div>

      {/* ******************************** */}
      <div className="drowsiness-why">
        <div className="drowsiness-bg2">
          <div class="hexagon hexagon1">
            <div class="hexagon-in1">
              <div class="hexagon-in2"></div>
            </div>
          </div>

          <div className="drowsiness-text1">
            <h1>Why Drowsiness Detection system is important ?</h1>
            <p style={{ fontWeight: "500" }}>
              Drowsiness is a mojor cause of driver impairment leading to
              crashes and fatalities. Research has established the ability to
              detect drowsiness with various kind of sensors .We study drowsy
              driving is a high-fidelity driving simulator and evaluated the
              ability of an automotive production-ready driver Monitoring
              system(DMS) to detect drowsy driving. Additionally, this feature
              was compare 2 and combine with signals from vehicles and vehicle
              based sensors.
            </p>
          </div>
          <div className="drowsiness-hid">
            <img src={Drowsiness} alt="drowsiness" />
          </div>
        </div>
      </div>
      {/* dcdcd */}
      <div className="Quote">
        <div className="Quote_media">
          <div className="Quote_avatar fit_media">
            <img
              src={nitin_profile}
              alt="logo"
              style={{ width: "100%", borderRadius: "20px" }}
            />
          </div>
        </div>
        <div className="Quote_body">
          <p className="Quote_content">
            {" "}
            " Have directed officers to work on a plicy to include On-Board
            Sleep Detection Sensors in Comercials Vehicles, at per with the
            europian standards"
          </p>
          <div className="Quote_author">-Nitin gathkari(@nitin_gatkari)</div>
        </div>
      </div>
      {/* ******************************** */}

      <div className="drowsiness-tweet">
        <div className="drowsiness-bg3">
          <div className="tweet-img">
            {/* <img className="img2" src={Dotbg} alt="logo" /> */}
            <a href="https://twitter.com/nitin_gadkari/status/1440236674349342736">
              <img className="img1" src={ng} alt="logo" />
            </a>
          </div>
        </div>
      </div>

      {/* cdfdfdfsdfsf */}

      <div className="drowsiness-tweet">
        <div className="drowsiness-bg2">
          <div className="demo_video">
            <iframe
              id="demo_video"
              src="https://www.youtube.com/embed/mI5qhFxFuT0"
            ></iframe>
          </div>
        </div>
      </div>

      {/* df */}
      <div className="drowsiness-why">
        <div className="drowsiness-bg2">
          <div class="hexagon hexagon2">
            <div class="hexagon-in1">
              <div class="hexagon-in3"></div>
            </div>
          </div>

          <div className="drowsiness-text2">
            <h1>Significant causes of road accident </h1>
            <p style={{ fontWeight: "500" }}>
              21 percent of all fatal accident are due to drowsy driving .60
              percent of adult driver or about 168 million people have driving a
              vehicle while feeling drowsy in their past years.
            </p>{" "}
            <p style={{ fontWeight: "500" }}>
              About 37% or 103 million people have fallen asleep at the wheel
              according to national sleep foundation(NSF) 2005 poll.
            </p>
            <div className="img3">
              {" "}
              <a href="https://www.medindia.net/patientinfo/drowsy-driving.htm">
                <img src={mdweb} alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
