import React from "react";
import ScrollableAnchor from "react-scrollable-anchor"
import "./Portfolio.css"

function Portfolio() {
  return (
    <ScrollableAnchor id="his-works">
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {"projects"}
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}

export default Portfolio;