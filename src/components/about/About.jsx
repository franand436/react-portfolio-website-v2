import "./about.css";
import School from "../../img/wozu.jpg";

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
          Subtitle "(Place something memeorable or attention grabbing)"
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="a-school">
          <img src={School} alt="" className="a-school-img" />
          <div className="a-school-texts">
            <h4 className="a-school-title">
              Software Development and Cybersecurity
            </h4>
            <p className="school-desc">
              In 2021 I was introduced to Woz U as a school and how I could make
              my dreams a reality. I signed up for the Software Development
              program in July 2022 and had a ton of fun learning how to program
              and code. I finished in March 2023. Afterwards I kept learning
              more about Python on my own. Then in late September 2022 I signed
              up for the Cybersecurity program, with my background in software
              development I was able to better understand parts of the new
              program. I was able to successfully complete the cybersecurity
              program towards the end of July 2023. Now I want to take what I’ve
              learned and apply in in the field, as well as learning more
              everyday about cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
