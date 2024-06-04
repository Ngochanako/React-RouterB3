import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Bai3() {
    
  return (
    <div> 
  <div className="site-mobile-menu site-navbar-target">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close">
        <span className="icofont-close js-menu-toggle" />
      </div>
    </div>
    <div className="site-mobile-menu-body" />
  </div>
  <nav className="site-nav">
    <div className="container">
      <div className="site-navigation">
        <a href="index.html" className="logo m-0">
          Tour <span className="text-primary">.</span>
        </a>
        <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
          <li className="active">
            <Link to={'home'}>Home</Link>
          </li>
          <li className="has-children">
            <a href="#">Dropdown</a>
            <ul className="dropdown">
              <li>
                <a href="elements.html">Elements</a>
              </li>
              <li>
                <a href="#">Menu One</a>
              </li>
              <li className="has-children">
                <a href="#">Menu Two</a>
                <ul className="dropdown">
                  <li>
                    <a href="#">Sub Menu One</a>
                  </li>
                  <li>
                    <a href="#">Sub Menu Two</a>
                  </li>
                  <li>
                    <a href="#">Sub Menu Three</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Menu Three</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to={'services'}>Services</Link>
          </li>
          <li>
            <Link to={'about'}>About</Link>
          </li>
          <li>
            <Link to={'contact'}>Contact Us</Link>
          </li>
        </ul>
        <a
          href="#"
          className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
          data-toggle="collapse"
          data-target="#main-navbar"
        >
          <span />
        </a>
      </div>
    </div>
  </nav>
 <Outlet/>
  <div className="site-footer">
    <div className="inner first">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="widget">
              <h3 className="heading">About Tour</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="widget">
              <ul className="list-unstyled social">
                <li>
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-apple" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 pl-lg-5">
            <div className="widget">
              <h3 className="heading">Pages</h3>
              <ul className="links list-unstyled">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="widget">
              <h3 className="heading">Resources</h3>
              <ul className="links list-unstyled">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="widget">
              <h3 className="heading">Contact</h3>
              <ul className="list-unstyled quick-info links">
                <li className="email">
                  <a href="#">mail@example.com</a>
                </li>
                <li className="phone">
                  <a href="#">+1 222 212 3819</a>
                </li>
                <li className="address">
                  <a href="#">43 Raymouth Rd. Baltemoer, London 3910</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="inner dark">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-8 mb-3 mb-md-0 mx-auto">
            <p>
              Copyright ©. All Rights Reserved. — Designed with love by{" "}
              <a href="https://untree.co" className="link-highlight">
                Untree.co
              </a>{" "}
              {/* License information: https://untree.co/license/ */}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div id="overlayer" /> */}
  {/* <div className="loader">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  </div>

  )
}
