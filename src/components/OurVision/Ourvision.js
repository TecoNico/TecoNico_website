import React from "react";
import "./ourvision.css";
const Ourvision = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="OurVision">
        <div className="title-vision">
          <h2>Our Vision</h2>
        </div>
        <div className="big_scr">
          <div className="heading">
            <h2>Vision</h2>
            <h2>Mission</h2>
            <h2>Plan</h2>
          </div>
          <div className="VMP">
            <div className="Vision">
              <p>
                We are passionate in our work and never look at alternatives for
                hard work. We build a strong connection with our colleagues,
                emotionally and professionally, which enable us to create a good
                environment in our company. We always treat our clients with a
                positive attitude, we treat them with due respect and maintain
                professionalism with them. As we always look at our company as a
                team of intellectuals, so we have created a democratic platform,
                in which everyone's voice and outlook is being mattered.
              </p>
            </div>
            <div className="Motivation">
              <p>
                Our mission is to provide a platform to the people where they
                can find anything that they need. A place where a small idea
                would be welcomed by both hands and would be provided with the
                best results out of it. We want to develop an environment where
                every one of us can thrive and meet all the demands of the
                coming future. A place where each and every one ‘s voice, not
                only talking about our employees but our customers and everyone
                who incubate their ideas in the company would be relished upon
                and would be cared.
              </p>
            </div>
            <div className="Plan">
              <p>
                We plan to provide the best products and services to the people.
                We never compromise with the quality as in the future we have to
                create benchmarks for us only. We have to make long term goals
                and have to create a proper structure to achieve it. We are here
                to provide great values and to earn and to make respect.
              </p>
            </div>
          </div>
        </div>
        <div className="small_scr">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Vision
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  We are passionate in our work and never look at alternatives
                  for hard work. We build a strong connection with our
                  colleagues, emotionally and professionally, which enable us to
                  create a good environment in our company. We always treat our
                  clients with a positive attitude, we treat them with due
                  respect and maintain professionalism with them. As we always
                  look at our company as a team of intellectuals, so we have
                  created a democratic platform, in which everyone's voice and
                  outlook is being mattered.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Mission
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  Our mission is to provide a platform to the people where they
                  can find anything that they need. A place where a small idea
                  would be welcomed by both hands and would be provided with the
                  best results out of it. We want to develop an environment
                  where every one of us can thrive and meet all the demands of
                  the coming future. A place where each and every one ‘s voice,
                  not only talking about our employees but our customers and
                  everyone who incubate their ideas in the company would be
                  relished upon and would be cared. t
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Plan
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  We plan to provide the best products and services to the
                  people. We never compromise with the quality as in the future
                  we have to create benchmarks for us only. We have to make long
                  term goals and have to create a proper structure to achieve
                  it. We are here to provide great values and to earn and to
                  make respect.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourvision;
