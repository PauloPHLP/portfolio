import React from "react";
import { useTranslation } from "react-i18next";
import ScrollableAnchor from "react-scrollable-anchor"
import "./Testimonials.css"

function Testimonials() {
  const { t } = useTranslation();

  return (
    <ScrollableAnchor id="his-testimonials">
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <ul className="slides">
                <li>
                  <blockquote>
                    <p>{t("testimonials_marcioText")}</p>
                    <a href="https://www.linkedin.com/in/marciolo/" target="_blank" rel="noopener noreferrer" className="cite-name">
                      <cite>Marcio Lourenço, {t("testimonials_marcioName")}</cite>
                    </a>
                  </blockquote>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}

export default Testimonials;