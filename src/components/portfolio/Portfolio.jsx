import React from "react";
import "./portfolio.css";
import ME from "../../assets/me.jpeg";

//vamos a tener los proyectos en un array de objetos, donde cada objeto va a ser un projecto
//esto es para tener limpieza en el código
//vamos a usar un .map para renderizarlos

const projects = [
  {
    id: 1,
    image: ME,
    title: "first project",
    github: "http://github.com",
    demo: "http://dribbble.com/Alien_pixels",
  },
  {
    id: 2,
    image: ME,
    title: "second project",
    github: "http://github.com",
    demo: "http://dribbble.com/Alien_pixels",
  },
  {
    id: 3,
    image: ME,
    title: "thirth project",
    github: "http://github.com",
    demo: "http://dribbble.com/Alien_pixels",
  },
  {
    id: 4,
    image: ME,
    title: "fourth project",
    github: "http://github.com",
    demo: "http://dribbble.com/Alien_pixels",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
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
        })}
      </div>
    </section>
  );
}

export default Portfolio;
