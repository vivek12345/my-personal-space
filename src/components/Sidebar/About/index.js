import React, { Component } from "react";

import "./style.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="image" />
        <div className="bio">
          <p>👋 My name is Vivek Nayyar</p>
          <p>💻 I work as a Senior Software Engineer with Zalando</p>
          <p>📢 Follow me @viveknayyar09</p>
          <p>
            📝{" "}
            <a href="https://www.dropbox.com/s/aklxs1asyxkejsw/Vivek%27s%20Resume.pdf?dl=1">
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
