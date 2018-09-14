import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import PublicationSection from '../components/PublicationSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Vivek Nayyar</span>
        </h5>

        <h3 className="bold">
          Front-End Engineer with 4 year's of experience building products
          for numerous domain's like e-commerce, real estate, video-streaming and now Fin-Tech.
        </h3>

        <ExperienceSection />
        <PublicationSection />
        <ProjectsSection />
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
)

export default IndexPage
