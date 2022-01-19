import React from "react";
import { Ourproject } from "../../components/HomePage/Ourproject";
import Introduce from "../../components/Introduce/Introduce";
import Nav from "../../components/Navbar/Nav";
import Ourvision from "../../components/OurVision/Ourvision";
import Team from "../../components/Team/Team";

export default function Announcement() {
  return (
    <>
      <Nav />
      <Introduce />
      <Ourvision />
      <Ourproject />
      <Team />
    </>
  );
}
