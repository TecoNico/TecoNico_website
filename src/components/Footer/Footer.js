import React from "react";
import "./Footer.css";
import logo from "../../Assets/images/logo-black.png";
import fb from "../../Assets/icons/fb.png";
import insta from "../../Assets/icons/insta.png";
import linkdin from "../../Assets/icons/linkdin.png";
import tweet from "../../Assets/icons/tweeter.png";
import yt from "../../Assets/icons/yt.png";
export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="containerL">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>TecoNico</h3>
              <p>
                <img src={logo} alt="" />
                <br />
                TecoNico Pvt. Ltd. try our best to solve modern-day problems
                with smart solutions using advanced technology.
              </p>
            </div>

            <div className="col-lg-3 col-md-6  footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="careers.html">Careers</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="ideas-incubation.html">Ideas Incubation</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="shahimandi.html">Shahi Mandi</a>
                </li>
              </ul>
            </div>

            <div className=" col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                <strong>Phone:</strong> +91 8619131789
                <br />
                <strong>Email:</strong> teconicopvtltd@gmail.com
                <br />
              </p>

              <div className="social-links">
                <a
                  href="https://twitter.com/Teconicopvtltd"
                  target="_blank"
                  className="twitter"
                >
                  <img src={tweet} width="18%" />
                </a>
                <a
                  href="https://www.facebook.com/Teconico-Pvt-Ltd-108404804298643"
                  target="_blank"
                  className="facebook"
                >
                  <img src={fb} width="18%" />
                </a>
                <a
                  href="https://www.instagram.com/teconicopvtltd/"
                  target="_blank"
                  className="instagram"
                >
                  <img src={insta} width="18%" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCxwKmIoGtvGW6OLW07kiUGw"
                  target="_blank"
                  className="google-plus"
                >
                  <img src={yt} width="18%" />
                </a>
                <a
                  href="https://www.linkedin.com/company/teconicopvtltd"
                  target="_blank"
                  className="linkedin"
                >
                  <img src={linkdin} width="18%" />
                </a>
              </div>
              <div className=" social-links" style={{ margin: "25px" }}>
                <button
                  type="submit"
                  className="btn btn-danger "
                  onclick="location.href='mailto:teconicopvtltd@gmail.com';"
                >
                  <i className="icon-mail-fill"></i>Message Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>TecoNico Private Limited</strong>. All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
};
