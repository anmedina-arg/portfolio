import React from "react";
import "./experience.css";
import {
  SiJavascript,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiStyledcomponents,
  SiPrisma,
  SiMongodb,
} from "react-icons/si";
import { BsFillPatchCheckFill } from "react-icons/bs";
import SkillCard from "../../components/cards/SkillCard";

const FRONTEND_SKIL = [
  {
    id: "FES4",
    name: "NextJS",
    level: "Intermediate",
    icon: <SiNextdotjs />,
  },
  {
    id: "FES4",
    name: "React",
    level: "Intermediate",
    icon: <SiReact />,
  },
  {
    id: "FES3",
    name: "Typescript",
    level: "Intermediate",
    icon: <SiTypescript />,
  },
  {
    id: "FES3",
    name: "Javascript",
    level: "Intermediate",
    icon: <SiJavascript />,
  },
  {
    id: "FES2",
    name: "Tailwind",
    level: "Intermediate",
    icon: <SiTailwindcss />,
  },
  {
    id: "FES2",
    name: "Styled-component",
    level: "Intermediate",
    icon: <SiStyledcomponents />,
  },
  {
    id: "FES2",
    name: "CSS",
    level: "Intermediate",
    icon: <SiCss3 />,
  },
  {
    id: "FES1",
    name: "HTML",
    level: "Intermediate",
    icon: <SiHtml5 />,
  },
];

const BACKEND_SKILL = [
  {
    id: "FES3",
    name: "Javascript",
    level: "Intermediate",
    icon: <SiJavascript />,
  },
  {
    id: "FES3",
    name: "Typescript",
    level: "Intermediate",
    icon: <SiTypescript />,
  },
  {
    id: "BES1",
    name: "Node",
    level: "Intermediate",
    icon: <SiNodedotjs />,
  },
  {
    id: "BES2",
    name: "SQL",
    level: "Intermediate",
    icon: <SiPostgresql />,
  },
  {
    id: "BES2",
    name: "MongoDB",
    level: "Beginner",
    icon: <SiMongodb />,
  },
  {
    id: "BES2",
    name: "Prisma",
    level: "Beginner",
    icon: <SiPrisma />,
  },
  {
    id: "BES3",
    name: "Express",
    level: "Intermediate",
    icon: <BsFillPatchCheckFill />,
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
            {FRONTEND_SKIL.map((skill) => {
              return <SkillCard skill={skill} />;
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__container">
            {BACKEND_SKILL.map((skill) => {
              return <SkillCard skill={skill} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
