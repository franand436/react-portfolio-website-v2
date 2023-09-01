import "./about.css";
import School from "../../img/School.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/12903271/pexels-photo-12903271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It started with playing online flash games, turned into taking apart
          my PC to try and upgrade it so I didn't have to buy a new PC. Now I'm
          hoping to turn tech into a full-blown tech career.
        </p>
        <p className="a-desc">
        I have been fortunate to have friends and family that think of me before they throw away old computers they aren’t planning to use anymore. I have been able to take these computers and build my own home lab as well as trying out different networking techniques to spread the load over various machines instead of having my main desktop do all the heavy lifting.
          <br />
          <br />
          I've had a fascination with technology since an early age and more recently have been fascinated with what it takes to stay anonymous online and try to keep my information in my own hands. I don't want big companies knowing enough about me from tracking data to know things like my age, gender, if I have kids or not, and my hobbies. I feel more comfortable if I can choose to give that information out only when it is needed.
          <br />
          <br />I am also bilingual, fluent in both english and spanish. That
          includes speaking, reading, and writing. I have been working in the
          customer service industry since I was 16, now I am excited to start on
          my tech career.
        </p>
        <div className="a-school">
          <img src={School} alt="" className="a-school-img" />
          <div className="a-school-texts">
            <h4 className="a-school-title">
              Woz U, Software Development and Cybersecurity
            </h4>
            <p className="school-desc">
              In 2021 I was introduced to Woz U and how I could make
              my dreams a reality. I signed up for the Software Development
              program in July 2021 and had a ton of fun learning how to program
              and code. I finished in March 2022. Afterwards I kept learning
              more about Python on my own. Then in September 2022 I signed up
              for the Cybersecurity program, with my background in software
              development I was able to better understand parts of the new
              program. I was able to successfully complete the cybersecurity
              program towards the end of July 2023. Now I want to take what I’ve
              learned and apply in in the field, as well as learning more
              everyday about software development and cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
