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
              <h5>Experience</h5>
              <small>+700 hs bootcamp</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3 Complete</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Testing</h5>
              <small>to test</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui
            dolorum animi ut beatae quo magni delectus aspernatur tempore! Natus
            nam quo perferendis amet nobis earum quidem velit iure suscipit!
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
