import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getArticles } from "../../providers/ApiHandlers";
import { Animated } from "react-animated-css";
import dateFormat from "dateformat";
import HashLoader from "react-spinners/HashLoader";
import ScrollableAnchor from "react-scrollable-anchor"
import "./Articles.css"

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    getArticles()
    .then((response) => {
      setArticles(response.articles.items.slice(0, 3));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000)
      console.log(response.articles)
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(err);
    });
  }, []);
  
  return (
    <ScrollableAnchor id="his-articles">
      <section id="articles">
        <div className="row articles">
          <div className="twelve columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div>
                  <h3 className="articles-title">{t("articles_title")}</h3>
                </div>
              </div>
            </div>
          </div> 
          {
            isLoading ?
            <div className="loader-aligner">
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <HashLoader
                  loading={isLoading}
                  size={100}
                  color={"#74FBFE"}
                />
              </Animated>
            </div>
            :
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              {
                articles.length === 0 ?
                <div className="twelve columns main-col">
                  <div className="row item">
                    <div className="twelve columns">
                      <div>
                        <h3 className="articles-empty-message">{t("articles_emptyMessage")}</h3>
                      </div>
                    </div>
                  </div>
                </div> 
                :
                articles.map((article) => (
                  <div>
                    <div className="three columns header-col">
                      <h1><span className="span-title"><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></span></h1>
                    </div>
                    <div className="nine columns main-col">
                      <div className="row item">
                        <div className="twelve columns">
                          <div>
                            <p className="info">{article.category}<span>•</span><em className="date">{dateFormat(article.created, 'dd/mm/yyyy, HH:MM')}</em></p>
                            <p>{t("resume_job1Details")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Animated>
          }
          
          {/* <div className="three columns header-col">
            <h1><span>{t("resume_education")}</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div>
                  <p className="info">{t("resume_job1")}<span>•</span><em className="date">{t("resume_job1Date")}</em></p>
                  <p>{t("resume_job1Details")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="three columns header-col">
            <h1><span>{t("resume_education")}</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div>
                  <p className="info">{t("resume_job1")}<span>•</span><em className="date">{t("resume_job1Date")}</em></p>
                  <p>{t("resume_job1Details")}</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </ScrollableAnchor>
  );
}

export default Articles;