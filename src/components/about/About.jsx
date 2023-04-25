import React from "react";
import "./about.css";
import ME from "../../assets/me.jpeg";
import { TbAward } from "react-icons/tb";
import { VscFolderLibrary } from "react-icons/vsc";


function About() {
  return (
    <section id="about">
      
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <a href="#experience">
                <h5>Experience</h5>
              </a>
              <small>+700 hs bootcamp</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <a href="#portfolio">
                <h5>Projects</h5>
              </a>
              <small>3 Complete</small>
            </article>
            {/* <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Testing</h5>
              <small>to test</small>
            </article> */}
          </div>
          <p>
            I am a proactive and responsible person. I like new challenges,
            research, study and learn new things. This has led me to train as a
            Full Stack Developer with main stack JavaScript and Node Js. I
            developed my experience in the IT world at Henry's bootcamp, where I
            have carried out different projects, individually and as a team! In
            addition, I generated solid and important soft skills during his 12
            years of experience as an Industrial Engineer where I led work
            teams, developing people in soft skills such as communication,
            feedback, inclusion, diversity, teamwork and continuous improvement.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let´s talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
