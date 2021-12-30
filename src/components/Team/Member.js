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
          <a href={props.ln} target="_blank">
            <FaLinkedinIn size={"20px"} />
          </a>
          <a href={props.fb} target="_blank">
            <FaFacebookF size={"20px"} />
          </a>
          <a href={props.insta} target="_blank">
            <FaInstagram size={"20px"} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Member;
