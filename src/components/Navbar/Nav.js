import React from "react";
import "./Nav.css";
import Homeimg from "../../Assets/pg1.png";
const Nav = () => {
  return (
    <header className="bg-img">
      <img src={Homeimg} alt="logo" className="Homeimg" />
      <div className="slogan">
        <pre style={{ color: "#e3332c" }}>Don't wait for future.. </pre>
        <pre> ..Let's change the Present</pre>
      </div>
      <div className="logo">
        Teco<span>Nico</span>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
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
              <a className="nav-link   " aria-current="page" href="/">
                Home
              </a>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul
                  class="dropdown-menu"
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
                </ul>
              </li>
              <a className="nav-link  " href="/blog">
                Blogs
              </a>
              <a className="nav-link " href="/team">
                Our Team
              </a>
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
