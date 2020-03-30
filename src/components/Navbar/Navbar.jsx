import React, { useEffect, Suspense } from "react";
import { animateScroll as scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Tooltip from "@material-ui/core/Tooltip";
import brazil_flag from "./../../assets/images/brazil_flag.png";
import united_states from "./../../assets/images/united-states-flag.png";
import "./Navbar.css";

const useStyles = makeStyles(theme => ({
  customWidth: {
    marginTop: 1,
    fontSize: 14,
    backgroundColor: "#000000"
  }
}));

function Navbar() {
  useEffect(() => {
    handleNavbarOnScroll();
    setActiveSection();
  }, []);

  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const changeLanguage = language => {
    document.title = language === "ptBR" ? "Paulo Lima | Portfólio" : "Paulo Lima | Portfolio";
    
    window.localStorage.setItem("locale", language);
    i18n.changeLanguage(language);
  };

  const getCurrentLanguage = () => {
    return window.localStorage.getItem("locale");
  }

  const handleNavbarOnScroll = () => {
    window.addEventListener("scroll", () => {
      const height = document.getElementById("header").offsetHeight;
      const scroll = window.scrollY;
      const navbar = document.getElementById("nav-wrap");

      if ((scroll > height * .20) && (scroll < height) && (window.innerWidth > 768)) {
        navbar.style.webkitTransition = "opacity 0.5s ease-in-out";
        navbar.style.opacity = 0;
      } else {
        if (scroll > height) 
          setMobileButtons("down");

        if (scroll < height)
          setMobileButtons("up");

        if (scroll < height * .20) {
          navbar.style.webkitTransition = "opacity 0.5s ease-out-in";
          navbar.style.opacity = 1;
          navbar.classList.remove("opaque");
        } else {
          navbar.style.webkitTransition = "opacity 0.5s ease-in-out";
          navbar.style.opacity = 1;
          navbar.classList.add("opaque");
        }
      }
    });
  }

  const setActiveSection = () => {
    let timer = null;

    window.addEventListener("scroll", () => {
      if (timer)
        clearTimeout(timer);

      timer = setTimeout(() => {
        const section = window.location.hash.replace("#", "");
        const currentItem = document.getElementById("anchor-" + section);
  
        if (section.length === 0) {
          clearAllActiveSections();
          const home = document.getElementById("anchor-home");
          home.classList.remove("disabled-section");
          home.classList.add("active-section");
        }
          
        if (currentItem && section.length > 0) {
          clearAllActiveSections();
  
          currentItem.classList.remove("disabled-section");
          currentItem.classList.add("active-section");
        }
      }, 100);
    }, false);
  };

  const clearAllActiveSections = () => {
    const otherItems = document.querySelectorAll(".active-section");

    if (otherItems) {
      otherItems.forEach((element) => {
        element.classList.remove("active-section");
        element.classList.add("disabled-section");
      });
    }
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const checkScroll = (e) => {
    if (window.location.hash && window.location.hash !== "#home" && window.location.hash !== "#nav-wrap") 
      e.preventDefault();
  }

  const setMobileButtons = (movement) => {
    const showBtn = document.getElementById("btn-show");
    const hideBtn = document.getElementById("btn-hide");

    if (movement === "up") {
      showBtn.classList.remove("hide-btn");
      hideBtn.classList.remove("hide-btn");
      showBtn.classList.add("show-btn");
      hideBtn.classList.add("show-btn");
    } else {
      showBtn.classList.remove("show-btn");
      hideBtn.classList.remove("show-btn");
      showBtn.classList.add("hide-btn");
      hideBtn.classList.add("hide-btn");

      setTimeout(() => {
        showBtn.classList.add("hide-btn-visibility");
        hideBtn.classList.add("hide-btn-visibility");
      }, 600);
    }
  }

  return (
    <Suspense fallback="loading">
      <nav id="nav-wrap">
        <a id="btn-show" className="mobile-btn" href="#nav-wrap" title="Show navigation" onClick={(e) => checkScroll(e)}>Show navigation</a>
        <a id="btn-hide" className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
        <ul id="nav" className="nav">
          <li>
            <a id="anchor-home" className="active-section" onClick={scrollToTop}>{t("navbar_home")}</a>
          </li>
          <li>
            <a id="anchor-about-him" className="disabled-section" href="#about-him">{t("navbar_about")}</a>
          </li>
          <li>
            <a id="anchor-his-resume" className="disabled-section" href="#his-resume">{t("navbar_resume")}</a>
          </li>
          <li>
            <a id="anchor-his-works" className="disabled-section" href="#his-works">{t("navbar_work")}</a>
          </li>
          <li>
            <a id="anchor-his-testimonials" className="disabled-section" href="#his-testimonials">{t("navbar_testimonials")}</a>
          </li>
          <li>
            <a id="anchor-his-articles" className="disabled-section" href="#his-articles">{t("navbar_articles")}</a>
          </li>
          <li>
            <Tooltip title="Translate to english." aria-label="Translate to english." classes={{ tooltip: classes.customWidth }}>
              <img src={united_states} className={getCurrentLanguage() === "enUS" ? "flag-activated" : "flag"} alt="Translate to english." onClick={() => changeLanguage("enUS")}/>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Traduzir para o português." aria-label="Traduzir para o português." classes={{ tooltip: classes.customWidth }}>  
              <img src={brazil_flag} className={getCurrentLanguage() === "ptBR" ? "flag-activated" : "flag"} alt="Traduzir para o português." onClick={() => changeLanguage("ptBR")}/>
            </Tooltip>
          </li>
        </ul>
      </nav>
    </Suspense>
  );
}

export default Navbar;