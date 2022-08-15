import React from "react";
import { Ourproject } from "../../components/HomePage/Ourproject";
import Introduce from "../../components/Introduce/Introduce";
import Nav from "../../components/Navbar/Nav2";
import Ourvision from "../../components/OurVision/Ourvision";
import Team from "../../components/Team/Team";

export default function Announcement() {
  return (
    <>
      <Nav />
      <div className="drowsiness-home ">
        <div className="home-bg">
          <div className="drowsiness-text">
            <p>Don't wait for future..</p>
            <p> ..Let's change the Present </p>
          </div>
        </div>
      </div>
      <Introduce />
      <Ourvision />
      <Ourproject />
      <Team />
    </>
  );
}
