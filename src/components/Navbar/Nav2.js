import React, { useEffect, useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <header className="">
      <nav
        className={`navbar navbar-expand-lg navbar-dark  ${
          show && "nav_black"
        }`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`logo ${show && "logo_blc"}`}>
            Teco<span color="red">Nico</span>
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel bg-dark"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="navbar-nav  offcanvas-body">
              <a
                className={`nav-link   ${show && "nav-link2"} `}
                aria-current="page"
                href="/"
              >
                Home
              </a>
              <li class="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle  ${
                    show && "nav-link2"
                  } `}
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul
                  class="dropdown-menu "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="/healthcare">
                      Healthcare
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/homeautomation">
                      HomeAutomation
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/attendencesystem">
                      Attendence System
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Drowsiness">
                      Drowsiness Detection
                    </a>
                  </li>
                </ul>
              </li>
              <a className={`nav-link   ${show && "nav-link2"} `} href="/blog">
                Blogs
              </a>
              <a
                className={`nav-link   ${show && "nav-link2"} `}
                href="/family"
              >
                Our Team
              </a>

              <a
                className={`nav-link   ${show && "nav-link2"} `}
                href="/contact"
              >
                Contact Us
              </a>
              <span className="span">
                <a href="/1"></a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
