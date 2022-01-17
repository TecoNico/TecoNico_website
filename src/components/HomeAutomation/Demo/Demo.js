import React from "react";
import "./Demo.css";
import Contact from "../../../Assets/contact.png";
import Click from "../../../Assets/click.gif";
const Demo = () => {
  return (
    <>
      <h1 id="title2">Demo</h1>
      <div className="demoProduct">
        <div className="Democard">
          <a href="/1" target="_blank">
            <img src={Contact} alt="Card Back" className="demoImg" />
            <img src={Click} class="img-top" alt="Card Front" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Demo;
