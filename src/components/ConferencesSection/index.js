import React from "react";
import Section from "../Section";
import ExperienceUnit from "../ExperienceUnit";

import JSHeroes2020 from "../../assets/images/conferences/jsheroes2020.png";
import ReactFinland2020 from "../../assets/images/conferences/reactFinland2020.jpg";
import WebcampZagreb2019 from "../../assets/images/conferences/webCampZagreb.png";
import reactFoo2019 from "../../assets/images/conferences/reactFoo2019.jpg";
import VietnamWebSummit from "../../assets/images/conferences/vietnamWebSummit.jpg";
import Techfluence2019 from "../../assets/images/conferences/techfluence.jpg";

class ConferencesSection extends React.Component {
  render() {
    return (
      <Section title="Conferences">
        <div className="row">
          <ExperienceUnit
            logo={JSHeroes2020}
            colour="#FFF"
            title="Upgrading code with the power of codemods"
            link="https://jsheroes.io/speakers/vivek-nayyar"
            timeperiod="2020"
            subtitle="How many times has it happened that a new version of a library is released and some of the APIs have either been deprecated or been marked unsafe or at times removed completely. If you have upgraded React from v14 to v16 or styled-components, you understand the issue. JavaScript itself changes over time as well and ideally you'll adapt to the improvements made to the language."
          />
          <ExperienceUnit
            logo={ReactFinland2020}
            title="Upgrading your legacy code incrementally with codemods"
            link="https://react-finland.fi/speakers/#vivek-nayyar"
            timeperiod="2020"
            subtitle="How many times has it happened that a new version of a library is released and some of the APIs have either been deprecated or been marked unsafe or at times removed completely. If you have upgraded React from v14 to v16 or styled-components, you understand the issue. JavaScript itself changes over time as well and ideally you'll adapt to the improvements made to the language."
          />
          <ExperienceUnit
            logo={WebcampZagreb2019}
            colour="#FFF"
            title="Magical land of AST's with babel plugins"
            link="https://2019.webcampzg.org/talks/magical-land-of-asts-with-babel-plugins/"
            timeperiod="2019"
            subtitle="AST’s are everywhere. They are a part of majority of our tools that we use today for development. Come join me in this journey of understanding them"
          />
          <ExperienceUnit
            logo={reactFoo2019}
            colour="#FFF"
            title="The magical land of AST's with babel, eslint and codemods"
            link="https://www.youtube.com/watch?v=669ste6xgkk"
            timeperiod="2019"
            subtitle="Talk about AST's, babel plugins, eslint plugins and writing custom codemods"
          />
          <ExperienceUnit
            logo={VietnamWebSummit}
            colour="#FFFFFF"
            title="Rethinking your apps with React Suspense and hooks"
            link="http://vietnam-summit.surge.sh/#/"
            timeperiod="2018"
            subtitle="Talk about how react suspense and hooks can change the way we design our react apps."
          />
          <ExperienceUnit
            logo={Techfluence2019}
            colour="#F3F3F3"
            title="The magical land of AST's with babel, eslint and codemods"
            link="https://www.youtube.com/watch?v=JvtPHI3E3kY"
            timeperiod="2019"
            subtitle="Talk about AST's, babel plugins, eslint plugins and writing custom codemods"
          />
        </div>
      </Section>
    );
  }
}

export default ConferencesSection;
