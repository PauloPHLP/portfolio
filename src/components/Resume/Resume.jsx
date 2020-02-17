import React from "react";
import ScrollableAnchor from "react-scrollable-anchor"
import Education from './Education/Education';
import Work from './Work/Work';
import Language from "./Language/Language";
import Technologies from "./Technologies/Technologies";
import "./Resume.css"

function Resume() {
  return (
    <ScrollableAnchor id="his-resume">
      <section id="resume">
        <Education/>
        <Work/>
        <Technologies/>
        <Language/>
      </section>
    </ScrollableAnchor>
  );
}

export default Resume;