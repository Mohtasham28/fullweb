import React from "react";

export const Snav = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="index.html">
                {" "}
                <img src="img/logo.png" alt="logo" />{" "}
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_icon">
                  <i className="fas fa-bars"></i>
                </span>
              </button>

              <div
                className="collapse navbar-collapse main-menu-item"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      about
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="services.html">
                      services
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href=""
                      id="navbarDropdownpro"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      portfolio
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownpro"
                    >
                      <a className="dropdown-item" href="portfolio.html">
                        portfolio
                      </a>
                      <a
                        className="dropdown-item"
                        href="portfolio_details.html"
                      >
                        portfolio details
                      </a>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="blog.html">
                        {" "}
                        blog
                      </a>
                      <a className="dropdown-item" href="single-blog.html">
                        Single blog
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown1"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      pages
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown1"
                    >
                      <a className="dropdown-item" href="elements.html">
                        Elements
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown cart">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdown3"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="flaticon-bag"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="single_product"></div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Snav;
