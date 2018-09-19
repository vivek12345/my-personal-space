import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          <p>👋 My name is Vivek Nayyar</p>
          <p>💻 I work as an UI Engineer with Trusting Social</p>
          <p>📢 Follow me @viveknayyar09</p>
          <p>📝 <a href="https://www.dropbox.com/s/cqthva2qulr8l94/VivekNayyarResume2018.pdf?dl=1">Download Resume</a></p>
          <div className="emoji">
            🤖 &nbsp;✈️&nbsp;🔈&nbsp; ⚽️
          </div>
        </div>
      </div>
    )
  }
}

export default About