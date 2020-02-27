import React from "react";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Network from "../Network/Network";
import Tooltip from "@material-ui/core/Tooltip";
import "./Footer.css";

const useStyles = makeStyles(() => ({
  customWidth: {
    marginTop: 1,
    fontSize: 16,
    backgroundColor: "transparent"
  }
}));

function Footer() {
  const classes = useStyles();

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
          <Tooltip title="Back to top" aria-label="Back to top" classes={{ tooltip: classes.customWidth }}>  
            <Link 
              className="icon-up-open smoothscroll"
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {1000}
            />
          </Tooltip>
        </div>
      </div>
    </footer>
  );
}

export default Footer;