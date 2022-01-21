import React from "react";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
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
        <div className="social-icons">
          <a href={props.ln} target="_blank">
            <BsLinkedin size={"30px"} />
          </a>
          <a href={props.fb} target="_blank">
            <BsFacebook size={"30px"} />
          </a>
          <a href={props.insta} target="_blank">
            <GrInstagram size={"30px"} />
          </a>
        </div>
        <h2>{props.name}</h2>

        <p>{props.role}</p>
      </div>
    </>
  );
};

export default Member;
