import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ConferencesSection from "../components/ConferencesSection";
import PublicationSection from "../components/PublicationSection";
import CoursesSection from "../components/CoursesSection";
import About from "../components/Sidebar/About";
import Links from "../components/Sidebar/Links";

import "./style.scss";

const IndexPage = () => (
  <div className="index">
    <div className="main">
      <h5>
        Hi, I'm <span className="bold">Vivek Nayyar</span>
      </h5>

      <h3 className="bold">
        Engineering Manager with 8 years' of experience building products for
        numerous domains like real estate, video-streaming, Fin-Tech, e-commerce and now Insurance Tech.
      </h3>

      <ExperienceSection />
      <PublicationSection />
      <ConferencesSection />
      <ProjectsSection />
      <CoursesSection />
    </div>

    <div className="aside">
      <div className="top">
        <About />
      </div>
      <div className="bottom">
        <Links />
      </div>
    </div>
  </div>
);

export default IndexPage;
