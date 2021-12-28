import React from "react";
import "./contact.css";
import Footer from "../../../Assets/footer.png";
import Fb from "../../../Assets/icons/fb.png";
import yt from "../../../Assets/icons/yt.png";
import Insta from "../../../Assets/icons/insta.png";
import Linkdin from "../../../Assets/icons/linkdin.png";
import Tweeter from "../../../Assets/icons/tweeter.png";
const contact = () => {
  return (
    <div>
      <div className="contactform">
        <div className="contactform-outer">
          <div className="contactform-inner">
            <div className="container-inner-21">
              <div className="contact-head">Contact Details</div>
              <div className="address-info">
                <h3>Address</h3>
                <p>Lorem ipsum dolor sit annet, consectetur</p>
              </div>
              <div className="email-info">
                <h3>Email Address</h3>
                <p>xyz@gmail.com</p>
              </div>
              <div className="phone-info">
                <h3>Phone No.</h3>
                <p>+91-1234585213</p>
              </div>
              <div className="TecoNicoimg">
                <img id="TecoNicoimg" src={Footer} alt="TecoNico" />
              </div>
              <div className="SocialMedia">
                <div>
                  <h4 align="center" style={{ color: "white" }}>
                    {" "}
                    Our Social Media Handles
                  </h4>
                </div>
                <div className="social-container">
                  <a
                    href="https://www.youtube.com/channel/UCxwKmIoGtvGW6OLW07kiUGw/featured"
                    className="youtube social"
                  >
                    <img src={yt} className="icon" alt="TecoNico" />
                  </a>
                  <a
                    href="https://www.facebook.com/teconicopvtltd"
                    className="facebook social"
                  >
                    <img src={Fb} className="icon" alt="TecoNico" />
                  </a>
                  <a
                    href="https://twitter.com/Teconicopvtltd"
                    className="twitter social"
                  >
                    <img src={Tweeter} className="icon" alt="TecoNico" />
                  </a>
                  <a
                    href="https://www.instagram.com/teconicopvtltd/"
                    className="instagram social"
                  >
                    <img src={Insta} className="icon" alt="TecoNico" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/teconicopvtltd/"
                    className="linkedin social"
                  >
                    <img src={Linkdin} className="icon" alt="TecoNico" />
                  </a>
                </div>
              </div>
            </div>
            <div className="container-inner-22">
              <div className="input-div">
                <input
                  className="name"
                  id="first-name"
                  type="text"
                  placeholder="  First Name  "
                />
                <label for="first-name"></label>
                <input
                  className="name"
                  id="last-name"
                  type="type"
                  placeholder="Last Name"
                />
                <label for="last-name"></label>
              </div>
              <div className="input-div">
                <input
                  className="email"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                />
                <label for="email"></label>
              </div>
              <div className="input-div">
                <label for="message"></label>
                <textarea
                  className="msg"
                  id="message"
                  name="message"
                  rows="8"
                  cols="100"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="btn-div">
                <button className="btn" type="button">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
