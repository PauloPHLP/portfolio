import React from "react";
import { useTranslation } from "react-i18next";
import "./Work.css"

function Work() {
  const { t } = useTranslation();

  return (
    <div className="row work">
      <div className="three columns header-col">
        <h1><span>{t("resume_work")}</span></h1>
      </div>
      <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
            <div><h3><a href="https://www.grupoboticario.com.br/en/Pages/Home.aspx" target="_blank" rel="noopener noreferrer">{t("resume_boticario")}</a></h3>
              <p className="info">{t("resume_job4")}<span>•</span><em className="date">{t("resume_job4Date")}</em></p>
              <p>{t("resume_job4Details")}</p>
            </div>
          </div>
        </div>
      
      <div className="row item">
        <div className="twelve columns">
            <div><h3><a href="https://www.cinq.com.br/" target="_blank" rel="noopener noreferrer">Cinq Technologies/Dextra Digital</a></h3>
              <p className="info">{t("resume_job3")}<span>•</span><em className="date">{t("resume_job3Date")}</em></p>
              <p>{t("resume_job3Details")}</p>
            </div>
          </div>
        </div>

        <div className="row item">
          <div className="twelve columns">
            <div><h3><a href="https://www.cinq.com.br/" target="_blank" rel="noopener noreferrer">Cinq Technologies</a></h3>
              <p className="info">{t("resume_job2")}<span>•</span><em className="date">{t("resume_job2Date")}</em></p>
              <p>{t("resume_job2Details")}</p>
            </div>
          </div>
        </div>

        <div className="row item">
          <div className="twelve columns">
            <div><h3><a href="https://www.up.edu.br/index.html" target="_blank" rel="noopener noreferrer">{t("resume_university")}</a></h3>
              <p className="info">{t("resume_job1")}<span>•</span><em className="date">{t("resume_job1Date")}</em></p>
              <p>{t("resume_job1Details")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;