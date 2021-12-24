import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <header className="">
      <nav class="navbar navbar-expand-lg navbar-dark  ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel bg-dark"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="navbar-nav  offcanvas-body">
              <a class="nav-link   " aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link " href="/healthcare">
                Products
              </a>
              <a class="nav-link  " href="/homeautomation">
                Blogs
              </a>
              <a class="nav-link  ">Our Team</a>
              <a class="nav-link  ">Coming Products</a>
              <a class="nav-link  ">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
