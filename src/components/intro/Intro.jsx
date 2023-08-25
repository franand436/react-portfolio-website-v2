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
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Cybersecurity Enthusiest</div>
              <div className="i-title-item">Server Administrator</div>
              <div className="i-title-item">Network Administrator</div>
              </div>
            </div>
            <p className="i-desc">I recently completed a Cybersecurity course through Woz U and am now lookign to break into the work field. I also have a background in software and Web development that will help me as a Cybersecurity proffessional. I am excited to join the workforce and keep learning more about the world of Cybersecurity in order to keep my and my peers information safe and secure.</p>
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
