import React from "react";
import Section from "../Section";
import ExperienceUnit from "../ExperienceUnit";

import logiqidDesign from "../../assets/images/projects/logiqids.png";
import reactExpress from "../../assets/images/projects/react-express.png";
import petZoned from "../../assets/images/projects/petzoned.jpg";
import reactNative from "../../assets/images/projects/reactNative.jpeg";
import hooksGuide from "../../assets/images/projects/hooks.png";
import reactPolling from "../../assets/images/projects/react-polling.png";
import asyncAwaitCodemod from "../../assets/images/projects/async-await-codemod.png";

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={logiqidDesign}
            colour="#FFFFFF"
            title="Logiqids - Discover the genius within your child!"
            link="https://www.logiqids.com/"
            timeperiod="2017"
            subtitle="LogIQids, started by IIT-IIM graduates, is an innovative web-based learning tool, to develop Logical Reasoning in kids at a young age. 
            Built with Node, React 16, Redux and Styled-Components"
          />
          <ExperienceUnit
            logo={hooksGuide}
            colour="#FFFFFF"
            title="Collection of react hooks curated by the community"
            link="http://hooks.guide"
            timeperiod="2018"
            subtitle="Collection of react hooks curated by the community"
          />
          <ExperienceUnit
            logo={reactPolling}
            colour="#FFFFFF"
            title="🔔 Polling an api made easy with react-polling"
            link="https://github.com/vivek12345/react-polling"
            timeperiod="2018"
            subtitle="Easy to use polling service built with react that follows the render props pattern."
          />
          <ExperienceUnit
            logo={asyncAwaitCodemod}
            colour="#FFFFFF"
            title="Async await codemod"
            link="https://github.com/vivek12345/async-await-codemod"
            timeperiod="2019"
            subtitle="Codemod to add try catch statements over async await if not already"
          />
          <ExperienceUnit
            logo={reactExpress}
            colour="#FFF"
            title="React Express boilerpate with google authentication"
            link="https://github.com/vivek12345/react-express-boilerplate"
            timeperiod="2018"
            subtitle="React, express boilerplate with eslint and prettier setup"
          />
          <ExperienceUnit
            logo={petZoned}
            colour="#FFF"
            title="Website for pet adoption and fostering"
            link="https://github.com/vivek12345/petsforlife"
            timeperiod="2016"
            subtitle="A website for pet adoption and pet fostering built with ruby on rails and angular"
          />
          <ExperienceUnit
            logo={reactNative}
            colour="#FFF"
            title="Custom header and bottom tab bar in react native"
            link="https://github.com/vivek12345/custom-header-tabbar-react-native"
            timeperiod="2018"
            subtitle="Repo for creating a custom header and bottom tab with react navigation and react-native"
          />
        </div>
      </Section>
    );
  }
}

export default ProjectsSection;
