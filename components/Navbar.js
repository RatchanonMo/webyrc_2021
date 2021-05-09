import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="site-header-two site-header-two__home-four">
          <nav className="main-nav__two stricky original">
            <div className="container-fluid">
              <div className="main-nav__logo-box">
                <a href="index.html">
                  <img src="assets/images/logo-full-light.png" alt />
                </a>
              </div>
              {/* /.main-nav__logo-box */}
              <div className="main-nav__main-navigation">
                <ul className=" main-nav__navigation-box">
                  <li className="dropdown current">
                    <a href="index.html">
                      Home
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="index.html">Home 01</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home 02</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home 03</a>
                      </li>
                      <li className="current">
                        <a href="index-4.html">Home 04</a>
                      </li>
                      <li>
                        <a href="index-5.html">Home 05</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">
                          Header Styles
                          <button className="dropdown-btn">
                            <i className="fa fa-angle-right" />
                          </button>
                        </a>
                        <ul>
                          <li>
                            <a href="index.html">Header 01</a>
                          </li>
                          <li>
                            <a href="index-2.html">Header 02</a>
                          </li>
                          <li>
                            <a href="index-3.html">Header 03</a>
                          </li>
                          <li className="current">
                            <a href="index-4.html">Header 04</a>
                          </li>
                          <li>
                            <a href="index-5.html">Header 05</a>
                          </li>
                        </ul>
                        {/* /.sub-menu */}
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li className="dropdown">
                    <a href="services-1.html">
                      Services
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="services-1.html">Services 01</a>
                      </li>
                      <li>
                        <a href="services-2.html">Services 02</a>
                      </li>
                      <li>
                        <a href="services-details.html">Services Details</a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li className="dropdown">
                    <a href="portfolio-standard.html">
                      Work
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="portfolio-standard.html">Portfolio Standard</a>
                      </li>
                      <li>
                        <a href="portfolio-full.html">Portfolio Full</a>
                      </li>
                      <li>
                        <a href="portfolio-masonary.html">Portfolio Masonary</a>
                      </li>
                      <li>
                        <a href="portfolio-details.html">Portfolio Details</a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      Pages
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="testimonials.html">Testimonials</a>
                      </li>
                      <li>
                        <a href="team.html">Team</a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li className="dropdown">
                    <a href="blog-standard.html">
                      News
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="blog-grid.html">News Page</a>
                      </li>
                      <li>
                        <a href="blog-standard.html">News List</a>
                      </li>
                      <li>
                        <a href="blog-details.html">News Details</a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              {/* /.main-nav__main-navigation */}
              <div className="main-nav__right">
                <a href="#" className="side-menu__toggler">
                  <span />
                </a>
                <a href="#">Need Help?</a>
                <a href="#">Carrier</a>
              </div>
              {/* /.main-nav__right */}
            </div>
            {/* /.container-fluid */}
          </nav>
          <nav className="main-nav__two stricky stricked-menu">
            <div className="container-fluid">
              <div className="main-nav__logo-box">
                <a href="index.html">
                  <img src="assets/images/logo-full-light.png" alt />
                </a>
              </div>
              {/* /.main-nav__logo-box */}
              <div className="main-nav__main-navigation">
                <ul className=" main-nav__navigation-box">
                  <li className="dropdown current">
                    <a href="index.html">
                      Home
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="index.html">Home 01</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home 02</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home 03</a>
                      </li>
                      <li className="current">
                        <a href="index-4.html">Home 04</a>
                      </li>
                      <li>
                        <a href="index-5.html">Home 05</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">
                          Header Styles
                          <button className="dropdown-btn">
                            <i className="fa fa-angle-right" />
                          </button>
                        </a>
                        <ul>
                          <li>
                            <a href="index.html">Header 01</a>
                          </li>
                          <li>
                            <a href="index-2.html">Header 02</a>
                          </li>
                          <li>
                            <a href="index-3.html">Header 03</a>
                          </li>
                          <li className="current">
                            <a href="index-4.html">Header 04</a>
                          </li>
                          <li>
                            <a href="index-5.html">Header 05</a>
                          </li>
                        </ul>
                        {/* /.sub-menu */}
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li className="dropdown">
                    <a href="services-1.html">
                      Services
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="services-1.html">Services 01</a>
                      </li>
                      <li>
                        <a href="services-2.html">Services 02</a>
                      </li>
                      <li>
                        <a href="services-details.html">Services Details</a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li className="dropdown">
                    <a href="portfolio-standard.html">
                      Work
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="portfolio-standard.html">Portfolio Standard</a>
                      </li>
                      <li>
                        <a href="portfolio-full.html">Portfolio Full</a>
                      </li>
                      <li>
                        <a href="portfolio-masonary.html">Portfolio Masonary</a>
                      </li>
                      <li>
                        <a href="portfolio-details.html">Portfolio Details</a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      Pages
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="testimonials.html">Testimonials</a>
                      </li>
                      <li>
                        <a href="team.html">Team</a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li className="dropdown">
                    <a href="blog-standard.html">
                      News
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="blog-grid.html">News Page</a>
                      </li>
                      <li>
                        <a href="blog-standard.html">News List</a>
                      </li>
                      <li>
                        <a href="blog-details.html">News Details</a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              {/* /.main-nav__main-navigation */}
              <div className="main-nav__right">
                <a href="#" className="side-menu__toggler">
                  <span />
                </a>
                <a href="#">Need Help?</a>
                <a href="#">Carrier</a>
              </div>
              {/* /.main-nav__right */}
            </div>
            {/* /.container-fluid */}
          </nav>
          {/* /.main-nav__one */}
        </header>

        <div className="side-menu__block">
          <div className="side-menu__block-overlay custom-cursor__overlay">
            <div className="cursor" />
            <div className="cursor-follower" />
          </div>
          {/* /.side-menu__block-overlay */}
          <div className="side-menu__block-inner ">
            <div className="side-menu__top justify-content-end">
              <a href="#" className="side-menu__toggler side-menu__close-btn">
                <img src="assets/images/shapes/close-1-1.png" alt />
              </a>
            </div>
            {/* /.side-menu__top */}
            <nav className="mobile-nav__container">
              {/* content is loading via js */}
            </nav>
            <div className="side-menu__sep" />
            {/* /.side-menu__sep */}
            <div className="side-menu__content">
              <p>
                Lorem Ipsum is simply dummy text the printing and setting
                industry. Lorm Ipsum has been the industry's stanard dummy text
                ever.{" "}
              </p>
              <p>
                <a href="mailto:needhelp@bizkar.com">needhelp@bizkar.com</a>{" "}
                <br /> <a href="tel:888-999-0000">888 999 0000</a>
              </p>
              <div className="side-menu__social">
                <a className="fab fa-facebook-f" href="#" />
                <a className="fab fa-twitter" href="#" />
                <a className="fab fa-instagram" href="#" />
                <a className="fab fa-pinterest-p" href="#" />
              </div>
            </div>
            {/* /.side-menu__content */}
          </div>
          {/* /.side-menu__block-inner */}
        </div>
        {/* /.side-menu__block */}
      </div>
    );
  }
}
