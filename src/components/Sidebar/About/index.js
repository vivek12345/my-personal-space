import React, { Component } from "react";

import "./style.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="image" />
        <div className="bio">
          <p>👋 My name is Vivek Nayyar</p>
          <p>💻 I work as an UI Engineer with Trusting Social</p>
          <p>📢 Follow me @viveknayyar09</p>
          <p>
            📝{" "}
            <a href="https://www.dropbox.com/s/l65z3igjcduxfd8/Vivek%27s%20Resume.pdf?dl=1">
              Download Resume
            </a>
          </p>
          <div className="emoji">🤖 &nbsp;✈️&nbsp;🔈&nbsp; ⚽️</div>
        </div>
      </div>
    );
  }
}

export default About;
