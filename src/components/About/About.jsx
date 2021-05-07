import React from "react";
import { useTranslation } from "react-i18next";
import ScrollableAnchor from "react-scrollable-anchor";
import picture from "./../../assets/images/picture.jpg";
import EnglishModel from '../../assets/resumes/Resume.pdf';
import PortugueseModel from '../../assets/resumes/Curriculo.pdf';
import "./About.css"

function About() {
  const { t } = useTranslation();

  return (
    <ScrollableAnchor id="about-him">
      <section id="about">
        <div className="row">
          <div className="three columns">
            <a href="https://www.linkedin.com/in/paulo-lima-1218a9149/" target="_blank" rel="noopener noreferrer">
              <img className="profile-pic" src={picture} alt="Paulo Lima."/>
            </a>
          </div>
          <div className="nine columns main-col">
            <h2>{t("about_me")}</h2>
            <p>{t("about_p1")}</p>
            <p>{t("about_p2")}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>{t("about_contact")}</h2>
                <p className="address">
                  <span>Paulo Lima</span><br />
                  <span>Curitiba - PR, Brazil
                  </span><br />
                  <span>041 9 9783-5546</span><br />
                  <span><a href="mailto:paulo.phlp@outlook.com">plima.himself@gmail.com</a></span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={EnglishModel} className="button" target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i>{t("about_download")} (EN-US)</a>
                  <a href={PortugueseModel} className="button btn-sec" target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i> {t("about_download")} (PT-BR)</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}

export default About;