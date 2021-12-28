import React from "react";

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
      </div>
    </>
  );
};

export default Member;
