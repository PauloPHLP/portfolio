import React from "react";
import ScrollableAnchor from "react-scrollable-anchor"
import "./Testimonials.css"

function Testimonials() {
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
                {"testimonials"}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}

export default Testimonials;