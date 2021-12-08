import React from "react";
import s4 from "../Assets/images/s4.png";
import { useHistory } from "react-router-dom";

const S4route = () => {
  let history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  return (
    <div>
      <img
        src={s4}
        style={{ width: "100%", height: "40em" }}
        onClick={redirect}
        alt="all Lights"
      />
    </div>
  );
};

export default S4route;
