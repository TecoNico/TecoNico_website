import React, { useState } from "react";
import s1 from "../../Assets/demo/Bothoff.png";
import s2 from "../../Assets/demo/BulbON.png";
import s3 from "../../Assets/demo/TubeLightON.png";
import s4 from "../../Assets/demo/BothON.png";
import remote1 from "../../Assets/demo/UI/s1.png";
import remote2 from "../../Assets/demo/UI/s2.png";
import remote12 from "../../Assets/demo/UI/s1s2.png";
import remote0 from "../../Assets/demo/UI/nopress.png";
import "./img.css";
const S1route = () => {
  const [Switch1, setSwitch1] = useState(false);
  const [Switch2, setSwitch2] = useState(true);
  const [Switch3, setSwitch3] = useState(true);
  const [Switch4, setSwitch4] = useState(true);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  return (
    <>
      {" "}
      <h1 align="center" style={{ visibility: "hidden", padding: "4%" }}>
        Welcome to Teconico
      </h1>
      <div className="Demo_Section">
        <div className="Demo_Section_img">
          <img
            src={s1}
            style={{
              width: "100%",
              height: "auto",
              display: Switch1 ? "none" : "block",
            }}
            alt="No Lights"
          />
          <img
            src={s2}
            style={{
              width: "100%",
              height: "auto",
              display: Switch2 ? "none" : "block",
            }}
            alt="No Lights"
          />
          <img
            src={s3}
            style={{
              width: "100%",
              height: "auto",
              display: Switch3 ? "none" : "block",
            }}
            alt="No Lights"
          />
          <img
            src={s4}
            style={{
              width: "100%",
              height: "auto",
              display: Switch4 ? "none" : "block",
            }}
            alt="No Lights"
          />
        </div>
        <div className="Demo_Section_Remote">
          <img
            src={remote0}
            style={{
              display: Switch1 ? "none" : "block",
            }}
            alt="No Lights"
          />

          <img
            src={remote1}
            style={{
              display: Switch2 ? "none" : "block",
            }}
            alt="No Lights"
          />
          <img
            src={remote2}
            style={{
              display: Switch3 ? "none" : "block",
            }}
            alt="No Lights"
          />
          <img
            src={remote12}
            style={{
              display: Switch4 ? "none" : "block",
            }}
            alt="No Lights"
          />
          <button
            onClick={() => {
              if (check1 === false && check2 === false) {
                setSwitch1(true);
                setSwitch2(true);
                setSwitch3(false);
                setSwitch4(true);
                setCheck1(true);
              } else if (check1 === true && check2 === false) {
                setSwitch1(false);
                setSwitch2(true);
                setSwitch3(true);
                setSwitch4(true);
                setCheck1(false);
              } else if (check1 === false && check2 === true) {
                setSwitch1(true);
                setSwitch2(true);
                setSwitch3(true);
                setSwitch4(false);
                setCheck1(true);
                // setCheck2(false);
              } else if (check1 === true && check2 === true) {
                setSwitch1(true);
                setSwitch2(false);
                setSwitch3(true);
                setSwitch4(true);
                setCheck1(false);
              }
            }}
            className="prev"
          ></button>

          <button
            className="next"
            onClick={() => {
              if (check1 === false && check2 === false) {
                setSwitch1(true);
                setSwitch2(false);
                setSwitch3(true);
                setSwitch4(true);
                setCheck2(true);
              } else if (check1 === false && check2 === true) {
                setSwitch1(false);
                setSwitch2(true);
                setSwitch3(true);
                setSwitch4(true);
                setCheck2(false);
              } else if (check1 === true && check2 === false) {
                setSwitch1(true);
                setSwitch2(true);
                setSwitch3(true);
                setSwitch4(false);
                setCheck2(true);
              } else if (check1 === true && check2 === true) {
                setSwitch1(true);
                setSwitch2(true);
                setSwitch3(false);
                setSwitch4(true);
                setCheck2(false);
              }
            }}
          ></button>
        </div>
      </div>
    </>
  );
};

export default S1route;
