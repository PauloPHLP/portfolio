import React from "react";
import { useTranslation } from "react-i18next";
import "./Language.css"

function Language() {
  const { t } = useTranslation();

  return (
    <div className="row language">
      <div className="three columns header-col">
        <h1><span>{t("resume_language")}</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <div><h3>{t("resume_portuguese")}</h3>
              <p className="info">{t("resume_portugueseDetails")}</p>
            </div>
          </div>
        </div>
        <div className="row item">
          <div className="twelve columns">
            <div><h3>{t("resume_english")}</h3>
              <p className="info">{t("resume_englishDetails")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;