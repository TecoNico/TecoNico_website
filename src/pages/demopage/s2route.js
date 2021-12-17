import React from "react";
import s2 from "../../Assets/images/s2.png";
import { useNavigate } from "react-router-dom";

const S2route = () => {
  let navigate = useNavigate();

  const redirect = () => {
    navigate("/1");
  };
  const redirectBack = () => {
    navigate("/4");
  };
  return (
    <div className="container">
      <img
        src={s2}
        style={{ width: "100%", height: "auto" }}
        onClick={redirect}
        alt="Lamp Light"
      />
      <button onClick={redirect} className="next"></button>
      <button onClick={redirectBack} className="prev"></button>
    </div>
  );
};

export default S2route;
