import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import arr2b from './../../assets/images/arr2b.jpg';
import facial_recognition from './../../assets/images/facial_recognition.jpg';
import welcome_screen_cinq from './../../assets/images/welcome_screen_cinq.jpg';
import IoT from './../../assets/images/IoT.png';
import { useTranslation } from "react-i18next";
import "./Portfolio.css"

function Portfolio() {
  const { t } = useTranslation();

  return (
    <ScrollableAnchor id="his-works">
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>{t("portfolio_check")}</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://www.linkedin.com/in/paulo-lima-1218a9149/" title="ARR 2B Orchestration Service" target="_blank">
                    <img alt="ARR 2B Orchestration Service" src={arr2b} className="portfolio-img"/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>ARR 2B</h5>
                        <p>C#</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://www.linkedin.com/in/paulo-lima-1218a9149/" title="Facial Recognition" target="_blank">
                    <img alt="ARR 2B Orchestration Service" src={facial_recognition} className="portfolio-img"/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Facial Recognition</h5>
                        <p>VueJS</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://www.linkedin.com/in/paulo-lima-1218a9149/" title="Welcome Screen" target="_blank">
                    <img alt="ARR 2B Orchestration Service" src={welcome_screen_cinq} className="portfolio-img"/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Welcome Screen</h5>
                        <p>NodeJS</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://corvalent.com/connected-assets-technologies-and-application-performance-management-cat-apm-iot-solutions/" title="IoT Energy & Oil" target="_blank">
                    <img alt="ARR 2B Orchestration Service" src={IoT} className="portfolio-img"/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>IoT Energy & Oil</h5>
                        <p>ReactJS</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}

export default Portfolio;