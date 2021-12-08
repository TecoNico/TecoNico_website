import React from "react";
import s3 from "../Assets/images/s3.png";

import { useHistory } from "react-router-dom";

const S3route = () => {
  let history = useHistory();

  const redirect = () => {
    history.push("/4");
  };

  return (
    <div>
      <img
        src={s3}
        style={{ width: "100%", height: "40em" }}
        onClick={redirect}
        alt="Rod Light"
      />
    </div>
  );
};

export default S3route;
