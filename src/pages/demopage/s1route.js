import React, { useState } from "react";
import s1 from "../../Assets/images/s1.png";
import s2 from "../../Assets/images/s2.png";
import s3 from "../../Assets/images/s3.png";
import s4 from "../../Assets/images/s4.png";
// import { useNavigate } from "react-router-dom";
import "./img.css";
const S1route = () => {
  // let navigate = useNavigate();
  const [Switch1, setSwitch1] = useState(false);
  const [Switch2, setSwitch2] = useState(true);
  const [Switch3, setSwitch3] = useState(true);
  const [Switch4, setSwitch4] = useState(true);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  // const redirect = () => {
  //   navigate("/2");
  // };
  // const redirectBack = () => {
  //   navigate("/3");
  // };

  return (
    <div className="container">
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
  );
};

export default S1route;
