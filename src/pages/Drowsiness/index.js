import React from "react";
import Home from "../../components/Drowsiness/Home/Home";
import Why from "../../components/Drowsiness/Why we/Why";
import OurProduct from "../../components/Drowsiness/OurProduct/OurProduct";

import Nav2 from "../../components/Navbar/Nav2";

const index = () => {
  return (
    <div>
      <>
        <Nav2 />
        <Home />
        <Why />
        <OurProduct />
      </>
    </div>
  );
};

export default index;
