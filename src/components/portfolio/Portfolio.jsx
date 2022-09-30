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
      "NOT RESPONSIVE YET. An individual project for Henry's bootcamp. It is a SPA in which requests are made to an external API, but you can also generate and add your own tourist activities for one or more countries. In this SPA, filters, searches, CRUD, paging and relations between tourist activities and one or more countries are carried out",
    skill: ["Javascript", "React", "Redux", "SQL - Postgres"],
  },
  {
    id: 2,
    image: Ecommerce,
    title: "Team Project - E-commerce Davo´s shoes",
    github: "https://github.com/Nikl4auss/henry-final-project",
    //demo: "https://github.com/Nikl4auss/henry-final-project",
    description:
      "NOT RESPONSIVE YET. The project is an e-commerce of sports shoes. Developed as a team to present at Henry's bootcamp. This project has user administration, different functionalities depending on the profile. In the administrator profile you can control and create stock, manage orders and manage registered users. The shopping cart is managed with Local Storege, you can leave the page and then resume the purchase from your cart without losing the addition! The SPA has a search bar, filters by products according to their stock, registration with Google, MeLi payment gateway and sends emails to the user with the status of their order, among other features. In addition to strengthening our technical knowledge, we have lived the experience of working as a team! with agile methodologies, organization of tasks in Trello and versioning in Github. Really great teamwork!. The technology used: Javascript | react | React-Redux | Pure CSS (modules) | Express | Node | SQL | Sequelize | Auth0 | Mailgun | MeLi payment gateway",
    skill: [
      "Javascript",
      "React",
      "Redux",
      "CSS 3",
      "Node - Express",
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
      "RESPONSIVE DESIGN. This is my personal portfolio, developed 100% in React with Javascript and CSS.In it I have implemented different libraries such as: SwiperJS and EmailJS.You are browsing this project!",
    skill: ["Media Queries - Responsive", "React", "CSS", "EmailJS", "SwiperJS"],
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
