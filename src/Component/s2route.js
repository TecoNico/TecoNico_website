import React from "react";
import s2 from "../Assets/images/s2.png";
import { useHistory } from "react-router-dom";

const S2route = () => {
  let history = useHistory();

  const redirect = () => {
    history.push("/3");
  };

  return (
    <div>
      <img
        src={s2}
        style={{ width: "100%", height: "40em" }}
        onClick={redirect}
        alt="Lamp Light"
      />
    </div>
  );
};

export default S2route;
