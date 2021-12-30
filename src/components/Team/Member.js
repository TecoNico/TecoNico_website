import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
const Member = (props) => {
  return (
    // <div className="Family">
    <>
      <div className="Members">
        <img
          src={props.avatar}
          alt="avatar"
          className="avatar"
          style={{ height: "auto", width: "90%", borderRadius: "50%" }}
        />
        <h2>{props.name}</h2>

        <p>{props.role}</p>
        <div className="social-icons">
          <FaLinkedinIn size={"20px"} />
          <FaFacebookF size={"20px"} />
          <FaInstagram size={"20px"} />
        </div>
      </div>
    </>
  );
};

export default Member;
