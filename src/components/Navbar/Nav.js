import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div>
      <header></header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-img ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto  ">
              <a class="nav-link   " aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link " href="#">
                Products
              </a>
              <a class="nav-link  " href="#">
                Blogs
              </a>
              <a class="nav-link  " href="#">
                Our Team
              </a>
              <a class="nav-link  " href="#">
                Coming Products
              </a>
              <a class="nav-link  " href="#">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
