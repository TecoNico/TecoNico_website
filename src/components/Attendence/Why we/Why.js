import React from "react";
// import Affordable from "./Affordable";
import "./why.css";
import YoutubeEmbed from "../../Youtube/YoutubeEmbed";
const Why = () => {
  return (
    <div className="Why_me">
      <h1 id="mb">What we do ?</h1>

      <div className="Attendence">
        <div className="what">
          <p id="work">How our product works?</p>
          <p id="sample">
            Log in through your name and password, go through the links, upload
            your information and get the required results. Furthermore, this
            helps you to keep a check on your daily intake. Just open this
            application, upload your reports and CT Scans and they will generate
            your report. It will also give you a percentage of your medical
            seriousness. This app covers almost all the health-related issues.
            <div className="health_readmore">
              <a
                href="https://medium.com/@TecoNico/do-you-know-how-artificial-intelligence-is-helping-in-healthcare-52bf0bd3fd6e"
                target="_blank"
                style={{ color: "cyan" }}
              >
                {"Read more"}
              </a>
            </div>
          </p>
        </div>
        <div className="what ">
          <h1 id="video">
            <YoutubeEmbed embedId="sHqUxH5aqYM" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Why;
