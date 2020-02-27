import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getArticles } from "../../providers/ApiHandlers";
import { Animated } from "react-animated-css";
import { makeStyles } from "@material-ui/core/styles";
import dateFormat from "dateformat";
import HashLoader from "react-spinners/HashLoader";
import ScrollableAnchor from "react-scrollable-anchor"
import Tooltip from "@material-ui/core/Tooltip";
import "./Articles.css"

const useStyles = makeStyles(() => ({
  customWidth: {
    fontSize: 14,
    marginTop: -15,
    backgroundColor: "#303030"
  },
  customWidthTitle: {
    fontSize: 14,
    marginTop: 1,
    marginLeft: -20,
    backgroundColor: "#303030"
  }
}));

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const classes = useStyles();

  useEffect(() => {
    getArticles()
    .then((response) => {
      setArticles(response.articles.items.slice(0, 3));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
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
                articles.map((article, index) => (
                  <div key={"article_" + index} className="twelve columns main-col">
                    <div className="three columns header-col">
                      <Tooltip title="Checkout on Medium..." aria-label="Checkout on Medium..." classes={{ tooltip: classes.customWidthTitle }}>  
                        <h1><span className="span-title"><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></span></h1>
                      </Tooltip>
                    </div>
                    <div className="nine columns main-col">
                      <div className="row item">
                        <div className="twelve columns">
                          <div>
                            <p className="info">{article.category}<span>•</span><em className="date">{dateFormat(article.created, "dd/mm/yyyy, HH:MM")}</em></p>
                            <p>
                              {
                                article.content_encoded.substring(article.content_encoded.indexOf("<p>"), article.content_encoded.indexOf("</p>")).replace("<p>", "")
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
              {
                articles.length === 0 ?
                null 
                :
                <Tooltip title="More articles on my Medium page..." aria-label="More articles on my Medium page..." classes={{ tooltip: classes.customWidth }}>  
                  <div className="see-more">
                    <a href="https://medium.com/@itspaulolimahimself" target="_blank" rel="noopener noreferrer"><i className="fa fa-ellipsis-h go-to-articles" aria-hidden="true"></i></a>
                  </div>
                </Tooltip>
              }
            </Animated>
          }
        </div>
      </section>
    </ScrollableAnchor>
  );
}

export default Articles;