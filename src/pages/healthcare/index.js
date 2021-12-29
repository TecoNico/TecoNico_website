import React from "react";
import Home from "../../components/Healthcare/Home/Home";
import Why from "../../components/Healthcare/Why we/Why";
import OurProduct2 from "../../components/Healthcare/OurProduct/OurProduct2";
import OurProduct from "../../components/Healthcare/OurProduct/OurProduct";

import Nav2 from "../../components/Navbar/Nav2";

export default function HealthCare() {
  return (
    <>
      <Nav2 />
      <Home />
      <Why />
      <OurProduct />
      <OurProduct2 />
    </>
  );
}
