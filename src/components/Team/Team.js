import React from "react";
import Member from "./Member";
import "./Team.css";
const Team = () => {
  return (
    <div className="container-fluid">
      <div className="OurTeam">
        <div className="Team">
          <p>Meet Our Team</p>
        </div>
        <div className="seperator"></div>
        <div className="Member">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
      </div>
    </div>
  );
};

export default Team;
