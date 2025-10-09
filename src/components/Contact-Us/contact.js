import React, { useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import image from "../../Assets/image.png";
import "./contact.css";

const Contact = () => {

   const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;

    // Encode the message and subject for Gmail
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Open Gmail compose with pre-filled content
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=developer@teconico.in&su=${subject}&body=${body}`,
      "_blank"
    );
  };



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
                <p style={{ color: "white" }}> 6, Ajmer Rd, Nirman Nagar, Brijlalpura, Jaipur, Rajasthan 302019</p>
              </div>
            </div>
            <div className="icons">
              <FaPhoneAlt color="white" size={"40px"} />
              <div>
                <h3 style={{ color: "Cyan" }}>Phone</h3>
                <p style={{ color: "white" }}> +918085035032</p>
              </div>
            </div>
            <div className="icons">
              <FaMailBulk color="white" size={"40px"} />
              <div>
                <h3 style={{ color: "Cyan" }}>Email</h3>
                <p style={{ color: "white" }}> developer@teconico.in</p>
              </div>
            </div>
          </div>
          <div className="contact_info_right">
            <div className="contact_form">
              <h1>Send Message</h1>
              <p style={{ color: "white" }}>
                Click below to send us an email directly:
              </p>
              <form  ref= {form} onSubmit = {sendEmail} id="contact-form" class="form-horizontal" role="form">
                <div class="form-group">
                  <div class="col-sm-12">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="NAME"
                      name="name"
                      // value={formData.name}
                      // onChange={handleChange}
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
                  rows="3"
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

export default Contact;
