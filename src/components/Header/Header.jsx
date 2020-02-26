import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import Network from '../Network/Network';
import "./Header.css";

const ReactFitText = require("react-fittext");

function Header() {
  const { t } = useTranslation();
  
  return (
    <section id="header">
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <ReactFitText compressor={1} minFontSize={40} maxFontSize={90}>
              <h1 className="responsive-headline">{t("header_title")}</h1>
            </ReactFitText> 
            <h3>{t("header_a")} <span>{t("header_carrer")}</span> {t('header_based')} <span>Curitiba</span> {t('header_works')} <span>{t("header_occupation")}</span> {t("header_using")} <span><a href="https://reactjs.org/" className="span-anchor" target="_blank" rel="noopener noreferrer">ReactJS</a></span> {t('header_technology')}</h3>
            <ul className="social">
              <hr/>
              <Network/>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <Link 
            className="icon-down-circle smoothscroll"
            to="about"
            spy={true}
            smooth={true}
            duration= {1000}
          />
        </p>
      </header>
    </section>
  );
}

export default Header;