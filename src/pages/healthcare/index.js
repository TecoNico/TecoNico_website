import React from "react";
import Home from "../../components/Home/Home";
import Why from "../../components/Why we/Why";
import OurProduct2 from "../../components/OurProduct/OurProduct2";
import OurProduct from "../../components/OurProduct/OurProduct";
// import Contact from "../../components/Contact/Contact";
import Nav2 from "../../components/Navbar/Nav2";

export default function HealthCare() {
  return (
    <>
      <Nav2 />
      <Home />
      <Why />
      <OurProduct />
      <OurProduct2 />
      {/* <Contact /> */}
    </>
  );
}
