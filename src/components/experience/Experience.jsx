import React from "react";
import "./experience.css";
import { SiJavascript, SiPostgresql } from "react-icons/si";
import { GrHtml5, GrCss3, GrReactjs, GrNode } from "react-icons/gr";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__container">
            <article className="experience__details">
              <GrHtml5 className="experience__detail-icon personal__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrCss3 className="experience__detail-icon personal__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__detail-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrReactjs className="experience__detail-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__container">
            <article className="experience__details">
              <GrNode className="experience__detail-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPostgresql className="experience__detail-icon" />
              <div>
                <h4>SQL - Postgres</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
