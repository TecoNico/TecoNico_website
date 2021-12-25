import React, { useState } from "react";
import s1 from "../../Assets/images/s1.png";
import s2 from "../../Assets/images/s2.png";
import s3 from "../../Assets/images/s3.png";
import s4 from "../../Assets/images/s4.png";
import { useNavigate } from "react-router-dom";
import "./img.css";
const S1route = () => {
  let navigate = useNavigate();
  const [Switch1, setSwitch1] = useState(false);
  const [Switch2, setSwitch2] = useState(true);
  const [Switch3, setSwitch3] = useState(true);
  const [Switch4, setSwitch4] = useState(true);
  const [check, setCheck] = useState(true);
  const [check2, setCheck2] = useState(true);

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
          if (check) {
            setSwitch3(false);
            setSwitch1(true);
            setSwitch2(true);
            setSwitch4(true);
            setCheck(false);
          } else if (!check) {
            setSwitch1(false);
            setSwitch2(true);
            setSwitch4(true);
            setSwitch3(true);
            setCheck(true);
          }
          if (check2 == false && check == false) {
            setSwitch1(true);
            setSwitch2(true);
            setSwitch4(false);
            setSwitch3(true);
          }
        }}
        className="prev"
      ></button>
      <button
        onClick={() => {
          if (check2) {
            setSwitch3(true);
            setSwitch1(true);
            setSwitch2(false);
            setSwitch4(true);
            setCheck2(false);
          } else if (!check2) {
            setSwitch1(false);
            setSwitch2(true);
            setSwitch4(true);
            setSwitch3(true);
            setCheck2(true);
          }
          if (check2 == false && check == false) {
            setSwitch1(true);
            setSwitch2(true);
            setSwitch4(false);
            setSwitch3(true);
          }
        }}
        className="next"
      ></button>
    </div>
  );
};

export default S1route;
