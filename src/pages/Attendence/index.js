import React from "react";
import Home from "../../components/Attendence/Home/Home";
import Why from "../../components/Attendence/Why we/Why";
import OurProduct from "../../components/Attendence/OurProduct/OurProduct";

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
