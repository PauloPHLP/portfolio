import React from "react";
import { useTranslation } from "react-i18next";
import html5 from './../../../assets/images/html5.png';
import css3 from './../../../assets/images/css3.png';
import javascript from './../../../assets/images/javascript.png';
import nodejs from './../../../assets/images/nodejs.png';
import reactjs from './../../../assets/images/reactjs.png';
import vuejs from './../../../assets/images/vuejs.png';
import csharp from './../../../assets/images/csharp.png';
import git from './../../../assets/images/git.png';
import "./Technologies.css"

function Technologies() {
  const { t } = useTranslation();

  return (
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>{t("resume_tech")}</span></h1>
      </div>
      <div>
        <div className="nine columns main-col tech-imgs">
          <p className="lead center">{t("resume_techMessage")}</p>
        </div>
        <ul className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns feature-item"><img className="skill" alt="HTML 5." src={html5}/>
            <h5 className="tech-name">HTML 5</h5>
            <p>{t("resume_html5")}</p>
          </div>
          <div className="columns feature-item"><img className="skill" alt="CSS 3." src={css3}/>
            <h5 className="tech-name">CSS 3</h5>
            <p>{t("resume_css3")}</p>
          </div>
          <div className="columns feature-item"><img className="skill" alt="JavaScript." src={javascript}/>
            <h5 className="tech-name">JavaScript</h5>
            <p>{t("resume_javascript")}</p>
          </div>
          <div className="columns feature-item"><img className="skill" alt="NodeJS." src={nodejs}/>
            <h5 className="tech-name">NodeJS</h5>
            <p>{t("resume_nodejs")}</p>
          </div>
          <div className="columns feature-item"><img className="skill" alt="ReactJS." src={reactjs}/>
            <h5 className="tech-name">ReactJS</h5>
            <p>{t("resume_reactjs")}</p>
          </div>
          <div className="columns feature-item"><img className="skill" alt="VueJS" src={vuejs}/>
            <h5 className="tech-name">VueJS</h5>
            <p>{t("resume_vuejs")}</p>
          </div>
          <div className="columns feature-item"><img className="skill" alt="C#." src={csharp}/>
            <h5 className="tech-name">C#</h5>
            <p>{t("resume_csharp")}</p>
          </div>
          <div className="columns feature-item"><img className="skill" alt="Git." src={git}/>
            <h5 className="tech-name">Git</h5>
            <p>{t("resume_git")}</p>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Technologies;