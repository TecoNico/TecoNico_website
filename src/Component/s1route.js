import React from "react";
import s1 from "../Assets/images/s1.png";
import { useHistory } from "react-router-dom";
const S1route = () => {
  let history = useHistory();

  const redirect = () => {
    history.push("/2");
  };

  return (
    <div>
      <img
        src={s1}
        style={{ width: "100%", height: "40em" }}
        onClick={redirect}
        alt="No Lights"
      />
    </div>
  );
};

export default S1route;
