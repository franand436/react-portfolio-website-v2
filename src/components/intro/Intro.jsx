import React from "react";
import "./intro.css";
import FALogo from "../../img/FALogoWhite.png"
import DownArrow from "../../img/down.png"

const Intro = () => {
  return (
    <div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2>Hello, my name is</h2>
            <h1>Francisco Andrade</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Cybersecurity Enthusiast</div>
              <div className="i-title-item">Server Administrator</div>
              <div className="i-title-item">Network Administrator</div>
              <div className="i-title-item">Photographer</div>
              </div>
            </div>
            <p className="i-desc">Welcome, and thank you for stopping by. I am looking to launch into the world of Cybersecurity and IT. Ever since I was young, I've been seriously into all things tech. It's been a lifelong passion that's stuck with me. Now, I'm excited to turn that passion into a fulfilling career, one that I can see myself happily retiring from in the distant future.  </p>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={FALogo} alt="" className="i-img" />
        </div>
        <div className="downarrow">
  <img src={DownArrow} alt="" className="downarrow-img" />
</div>
      </div>
    </div>
  );
};

export default Intro;
