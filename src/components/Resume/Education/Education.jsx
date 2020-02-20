import React from "react";
import { useTranslation } from "react-i18next";
import "./Education.css"

function Education() {
  const { t } = useTranslation();

  return (
    <div className="row education">
      <div className="three columns header-col">
        <h1><span>{t("resume_education")}</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <div><h3><a href="https://www.up.edu.br/index.html" target="_blank" rel="noopener noreferrer">{t("resume_university")}</a></h3>
              <p className="info">{t("resume_course")}<span>•</span><em className="date">{t("resume_date")}</em></p>
              <p>{t("resume_details")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;