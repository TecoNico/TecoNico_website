import React from "react";
import s1 from "../Assets/images/s1.png";
import { useHistory } from "react-router-dom";
import "./img.css";
const S1route = () => {
  let history = useHistory();

  const redirect = () => {
    history.push("/2");
  };
  const redirectBack = () => {
    history.push("/3");
  };

  return (
    <div className="container">
      <img src={s1} style={{ width: "100%", height: "auto" }} alt="No Lights" />
      <button onClick={redirect} className="next"></button>
      <button onClick={redirectBack} className="prev"></button>
    </div>
  );
};

export default S1route;
