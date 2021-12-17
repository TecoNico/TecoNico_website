import React from "react";
import s3 from "../../Assets/images/s3.png";

import { useNavigate } from "react-router-dom";

const S3route = () => {
  let navigate = useNavigate();

  const redirect = () => {
    navigate("/4");
  };
  const redirectBack = () => {
    navigate("/1");
  };

  return (
    <div className="container">
      <img
        src={s3}
        style={{ width: "100%", height: "auto" }}
        onClick={redirect}
        alt="Rod Light"
      />
      <button onClick={redirect} className="next"></button>
      <button onClick={redirectBack} className="prev"></button>
    </div>
  );
};

export default S3route;
