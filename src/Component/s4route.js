import React from "react";
import s4 from "../Assets/images/s4.png";
import { useHistory } from "react-router-dom";

const S4route = () => {
  let history = useHistory();

  const redirect = () => {
    history.push("/3");
  };
  const redirectBack = () => {
    history.push("/");
  };

  return (
    <div className="container">
      <img
        src={s4}
        style={{ width: "100%", height: "auto" }}
        onClick={redirect}
        alt="all Lights"
      />
      <button onClick={redirect} className="next"></button>
      <button onClick={redirectBack} className="prev"></button>
    </div>
  );
};

export default S4route;
