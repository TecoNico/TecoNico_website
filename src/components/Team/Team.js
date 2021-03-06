import React from "react";
import Member from "./Member";
import shubham from "../../Assets/Team-Image/shubham.jpg";
import CA from "../../Assets/Team-Image/CA SR Yadav.jpeg";
import Harshit from "../../Assets/Team-Image/harshit.jpeg";
import Vishwajeet from "../../Assets/Team-Image/vishwajeet.jpg";
import harsh from "../../Assets/Team-Image/harsh.jpg";
import Vaibhav from "../../Assets/Team-Image/vaibhav.jpg";

import "./Team.css";
const Team = () => {
  const team = [
    {
      name: "CA SR Yadav",
      role: "Professional Advisor",
      avatar: CA,
      fb: "https://www.facebook.com/aayush.yadav.58760",
    },
    {
      name: "Vishwajeet Dwivedy",
      role: "Data Science Consultant",
      avatar: Vishwajeet,
      insta: "https://www.linkedin.com/in/vishwajeet-dwivedy-85b58316a/",
    },
    {
      name: "Vaibhav Gupta",
      role: "Content Marketing ",
      avatar: Vaibhav,
      ln: "https://www.linkedin.com/in/vaibhav-gupta-a509821b3",
      insta: "https://www.instagram.com/vaibhav_gupta0807/",
    },
    {
      name: "Shubham Patidar",
      role: "Web Developer",
      avatar: shubham,
    },
    {
      name: "Harsh Bunkar",
      role: "Content Head",
      avatar: harsh,
    },
    {
      name: "Harshit Kumar",
      role: "Aesthetic Head",
      avatar: Harshit,
      insta: "https://www.instagram.com/hksoriginal/",
      ln: "https://www.linkedin.com/in/harshit-k-3892a4112/",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="OurTeam">
        <div className="Team">
          <p>Meet Our Team</p>
        </div>
        <div className="seperator"></div>
        <div className="Member">
          {team.map((team) => (
            <Member
              name={team.name}
              role={team.role}
              avatar={team.avatar}
              fb={team.fb}
              insta={team.insta}
              ln={team.ln}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
