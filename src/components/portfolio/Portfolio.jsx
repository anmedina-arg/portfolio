import React from "react";
import "./portfolio.css";
import PICountry from "../../assets/PI-Country.jpg";
import Ecommerce from "../../assets/Ecommerce.jpg";
import MyPortfolio from "../../assets/Portfolio.jpg";

//vamos a tener los proyectos en un array de objetos, donde cada objeto va a ser un projecto
//esto es para tener limpieza en el código
//vamos a usar un .map para renderizarlos

const projects = [
  {
    id: 1,
    image: PICountry,
    title: "Individual Proyect - Countries Henry",
    github: "http://github.com",
    demo: "https://www.youtube.com/watch?v=2mivlbmIUsA&t=6s",
    description:
      "An individual project for Henry's bootcamp. It is a SPA in which requests are made to an external API, but you can also generate and add your own tourist activities for one or more countries. In this SPA, filters, searches, CRUD, paging and relations between tourist activities and one or more countries are carried out",
    skill: ["Javascript", "React", "Redux", "SQL - Postgres"],
  },
  {
    id: 2,
    image: Ecommerce,
    title: "Team Project - E-commerce Davo´s shoes",
    github: "https://github.com/Nikl4auss/henry-final-project",
    //demo: "https://github.com/Nikl4auss/henry-final-project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse amet dignissimos qui, il",
    skill: [
      "Javascript",
      "React",
      "Redux",
      "SQL - Postgres",
      "Auth0",
      "Meilgun",
      "Pasarela de pago MELI",
    ],
  },
  {
    id: 3,
    image: MyPortfolio,
    title: "My Portfolio",
    github: "https://github.com/anmedina-arg/portfolio",
    //demo: "http://dribbble.com/Alien_pixels",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse amet dignissimos qui, il",
    skill: ["Responsive", "React", "CSS", "MailJS", "SwiperJS"],
  },
  // {
  //   id: 4,
  //   image: PICountry,
  //   title: "fourth project",
  //   github: "http://github.com",
  //   demo: "http://dribbble.com/Alien_pixels",
  // },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map(
          ({ id, image, title, github, demo, description, skill }) => {
            let skillArr = [];
            for (let i = 0; i < skill.length; i++) {
              console.log(skill.length);
              skillArr.push(skill[i]);
            }
            console.log(skillArr);
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                  {skillArr.map((e) => {
                    return <li>{e}</li>;
                  })}
                </ul>
                {/* en los tag <a> poner la url de los proyectos de github */}
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Portfolio;
