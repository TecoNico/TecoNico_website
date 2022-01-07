import React from "react";
import "./Demo.css";
import Contact from "../../../Assets/contact.png";
const Demo = () => {
  return (
    <>
      <h1 id="title2">Demo</h1>
      <div className="DemoProduct">
        <div className="demoImg">
          <a href="/1">
            <img src={Contact} alt="Demo house" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Demo;
