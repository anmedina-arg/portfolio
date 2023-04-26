import React from "react";
import "./experience.css";
import { SiJavascript, SiPostgresql } from "react-icons/si";
import { GrHtml5, GrCss3, GrReactjs, GrNode } from "react-icons/gr";
import { BsFillPatchCheckFill } from "react-icons/bs";
import SkillCard from "../ui/cards/SkillCard";

const FRONTEND_SKIL = [
  {
    id: 'FES1',
    name: 'HTML',
    level: 'Intermediate',
    icon: <GrHtml5 />
  },
  {
    id: 'FES2',
    name: 'CSS',
    level: 'Intermediate',
    icon: <GrCss3 />
  },
  {
    id: 'FES3',
    name: 'Javascript',
    level: 'Intermediate',
    icon: <SiJavascript />
  },
  {
    id: 'FES4',
    name: 'React',
    level: 'Intermediate',
    icon: <GrReactjs />
  },
];

const BACKEND_SKILL = [
  {
    id: 'BES1',
    name: 'Node',
    level: 'Intermediate',
    icon: <GrNode />
  },
  {
    id: 'BES2',
    name: 'SQL',
    level: 'Intermediate',
    icon: <SiPostgresql />
  },
  {
    id: 'BES3',
    name: 'Express',
    level: 'Intermediate',
    icon: <BsFillPatchCheckFill />
  },
];

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__container">
            {
              FRONTEND_SKIL.map((skill) => {
                return (
                  <SkillCard skill={skill} />
                )
              })
            }
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__container">
            {
              BACKEND_SKILL.map((skill) => {
                return (
                  <SkillCard skill={skill} />
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
