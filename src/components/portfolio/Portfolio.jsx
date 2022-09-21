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
    title: "first project",
    github: "http://github.com",
    demo: "https://www.youtube.com/watch?v=2mivlbmIUsA&t=6s",
  },
  {
    id: 2,
    image: Ecommerce,
    title: "second project",
    github: "https://github.com/Nikl4auss/henry-final-project",
    //demo: "https://github.com/Nikl4auss/henry-final-project",
  },
  {
    id: 3,
    image: MyPortfolio,
    title: "thirth project",
    github: "https://github.com/anmedina-arg/portfolio",
    //demo: "http://dribbble.com/Alien_pixels",
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
