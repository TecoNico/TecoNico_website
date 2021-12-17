import React from "react";
import s1 from "../../Assets/images/s1.png";
import { useNavigate } from "react-router-dom";
import "./img.css";
const S1route = () => {
  let navigate = useNavigate();

  const redirect = () => {
    navigate("/2");
  };
  const redirectBack = () => {
    navigate("/3");
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
