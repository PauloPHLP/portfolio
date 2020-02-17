import React from "react";
import Network from "../Network/Network";
import { Link } from "react-scroll";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <Network/>
          </ul>
          <ul className="copyright">
            <li>&copy; Copyright 2017 Tim Baker</li>
            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/" target="_blank" rel="noopener noreferrer">Styleshout</a></li>
          </ul>
        </div>
        <div id="go-top">
          <Link 
            title="Back to Top"
            className="icon-up-open smoothscroll"
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {1000}
            />
        </div>
      </div>
    </footer>
  );
}

export default Footer;