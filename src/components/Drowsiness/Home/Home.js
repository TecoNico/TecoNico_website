import React from "react";
import "./Home.css";
import Drowsiness from "../../../Assets/drowsiness.png";
import Logo from "../../../Assets/logo.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <img src={Logo} alt="smart house" />
          <h1>Drowsiness Detection</h1>
          <h1> Using </h1>
          <h1> Artificial Intelligence</h1>
        </div>
        <div className="smart_house">
          <img src={Drowsiness} style={{ width: "150%" }} alt="smart house" />
        </div>
      </div>
      <div className=" Drowsiness">
        <div className="what">
          <p id="question-Drowsiness" class>
            What is the AI for Drowsiness Detection?
          </p>
          <p id="ans">
            AI in healthcare is an application of machine learning (ML)
            algorithms and other cognitive technologies in medical settings. In
            the simplest sense, AI is when computers and other machines mimic
            human cognition, and are capable of learning, thinking, and making
            decisions or taking actions. AI in healthcare, then, is the use of
            machines to analyze and act on medical data, usually with the goal
            of predicting a particular outcome.
          </p>
        </div>
        <div className="what1">
          <p id="question-Drowsiness">What is its use ?</p>
          <p id="ans">
            Rather than robotics, AI in healthcare focuses on large amount of
            data that can save lives by analyzing them. This includes treatment
            methods and their outcomes, survival rates and speed of care
            gathered across millions of patients, geographical locations and
            innumerable and sometimes interconnected health conditions. These
            computing power can easily analyze the trends in data and can make
            predictions which a normal human brain can’t.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
