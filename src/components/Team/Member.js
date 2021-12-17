import React from "react";
import avatar from "../../Assets/Avatar.png";
const Member = () => {
  return (
    <div className="Members">
      <img src={avatar} alt="avatar" className="avatar" />
      <h2>Aditya Mangal</h2>
      <p>Founder and Director</p>
    </div>
  );
};

export default Member;
