import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import image from "../../Assets/image.png";
import "./contact.css";

const contact = () => {
  return (
    <>
      {/* <img src={image} alt="Healthcare" className="contact_image" /> */}
      <div className="contact_section">
        <div className="contact_us" style={{ color: "white" }}>
          <h2>Contact US</h2>
        </div>
        <div className="contact_info">
          <div className="contact_info_left">
            <div className="icons">
              <FaMapMarkerAlt color="white" size={"40px"} />
              <div>
                <h3 style={{ color: "Cyan" }}>Address</h3>
                <p style={{ color: "white" }}> 452-adress sm with client</p>
              </div>
            </div>
            <div className="icons">
              <FaPhoneAlt color="white" size={"40px"} />
              <div>
                <h3 style={{ color: "Cyan" }}>Phone</h3>
                <p style={{ color: "white" }}> +9184675 6456 2</p>
              </div>
            </div>
            <div className="icons">
              <FaMailBulk color="white" size={"40px"} />
              <div>
                <h3 style={{ color: "Cyan" }}>Email</h3>
                <p style={{ color: "white" }}> teconicopvtltd@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact_info_right">
            <div className="contact_form">
              <h1>Send Message</h1>
              <form id="contact-form" class="form-horizontal" role="form">
                <div class="form-group">
                  <div class="col-sm-12">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="NAME"
                      name="name"
                      //   value=""
                      required
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-sm-12">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="EMAIL"
                      name="email"
                      //   value=""
                      required
                    />
                  </div>
                </div>

                <textarea
                  class="form-control"
                  rows="2"
                  cols="40"
                  placeholder="MESSAGE"
                  name="message"
                  required
                ></textarea>

                <button
                  class="btn send-button"
                  id="submit"
                  type="submit"
                  value="SEND"
                  style={{ backgroundColor: "cyan", color: "white" }}
                  //   background-color="cyan"
                >
                  <div class="alt-send-button">
                    <i class="fa fa-paper-plane"></i>
                    <span class="send-text">SEND</span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
