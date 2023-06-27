import React from "react";
import "./portfolio.css";
import PICountry from "../../assets/PI-Country.webp";
import Ecommerce from "../../assets/Ecommerce.webp";
import MyPortfolio from "../../assets/Portfolio.webp";
import Coolco from "../../assets/Coolco.webp";
import Gallery from "../../assets/The-gallery.webp";
import Cats from "../../assets/Cats-and-dog.webp";
import Apes from "../../assets/Apes.webp";
import Tateti from "../../assets/tateti.png";
import Memory from "../../assets/memory_card_game.png";
import Sudoku from "../../assets/sudoku.png";
import Pelis from "../../assets/buscador_peliculas.png";
import Todo from "../../assets/todoapp.png";
import Orderix from "../../assets/Orderix.png";
import { Marquee } from "../marquee/marquee";
import Card from "../ui/cards/Card";

//vamos a tener los proyectos en un array de objetos, donde cada objeto va a ser un projecto
//esto es para tener limpieza en el código
//vamos a usar un .map para renderizarlos

const projects = [
  {
    id: 24,
    image: Coolco,
    title: "Coolco",
    github: "http://github.com",
    demo: "https://www.coolco.io/",
    description: "TO COMPLETE... building in progress...",
    skill: [
      "Media Queries - Responsive",
      "React",
      "CSS",
      "EmailJS",
      "SwiperJS",
    ],
  },
  {
    id: 27,
    image: Apes,
    title: "Apes International",
    github: "http://github.com",
    demo: "https://www.apesgroup.net/",
    description: "TO COMPLETE... building in progress...",
    skill: [
      "Media Queries - Responsive",
      "React",
      "CSS",
      "EmailJS",
      "SwiperJS",
    ],
  },
  {
    id: 25,
    image: Gallery,
    title: "The Gallery",
    github: "http://github.com",
    demo: "https://www.thegallery.live/",
    description: "TO COMPLETE... building in progress...",
    skill: [
      "Media Queries - Responsive",
      "React",
      "CSS",
      "EmailJS",
      "SwiperJS",
    ],
  },
  {
    id: 26,
    image: Cats,
    title: "Cats and dogs",
    github: "http://github.com",
    demo: "https://www.catsanddogs.io/",
    description: "TO COMPLETE... building in progress...",
    skill: [
      "Media Queries - Responsive",
      "React",
      "CSS",
      "EmailJS",
      "SwiperJS",
    ],
  },
  {
    id: 22,
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
    id: 21,
    image: PICountry,
    title: "Individual Proyect - Countries Henry",
    github: "http://github.com",
    demo: "https://www.youtube.com/watch?v=2mivlbmIUsA&t=6s",
    description:
      "NOT RESPONSIVE YET. An individual project for Henry's bootcamp. It is a SPA in which requests are made to an external API, but you can also generate and add your own tourist activities for one or more countries. In this SPA, filters, searches, CRUD, paging and relations between tourist activities and one or more countries are carried out",
    skill: ["Javascript", "React", "Redux", "SQL - Postgres"],
  },
  {
    id: 23,
    image: MyPortfolio,
    title: "My Portfolio",
    github: "https://github.com/anmedina-arg/portfolio",
    //demo: "http://dribbble.com/Alien_pixels",
    description:
      "RESPONSIVE DESIGN. This is my personal portfolio, developed 100% in React with Javascript and CSS.In it I have implemented different libraries such as: SwiperJS and EmailJS.You are browsing this project!",
    skill: [
      "Media Queries - Responsive",
      "React",
      "CSS",
      "EmailJS",
      "SwiperJS",
    ],
  },
  {
    id: 7,
    image: Memory,
    title: "Memory card game",
    github: "",
    demo: "https://anmedina-arg.github.io/memory-card-game/",
    description: "",
    skill: ["Javascript"],
  },
  {
    id: 8,
    image: Tateti,
    title: "tic tac toe",
    github: "",
    demo: "https://ta-te-ti-anmedina-arg.vercel.app/",
    description: "",
    skill: ["Javascript"],
  },
  {
    id: 9,
    image: Sudoku,
    title: "Sudoku",
    github: "",
    demo: "https://sudoku-game-nextjs.vercel.app/",
    description: "",
    skill: ["Javascript"],
  },
  {
    id: 10,
    image: Pelis,
    title: "buscador de peliculas",
    github: "",
    demo: "https://6481e3d5c714880092eaaac7--fantastic-daffodil-aada43.netlify.app/",
    description: "",
    skill: ["Javascript"],
  },
  {
    id: 11,
    image: Todo,
    title: "to do app",
    github: "",
    demo: "https://to-do-app-next.vercel.app/",
    description: "",
    skill: ["Javascript"],
  },
  {
    id: 12,
    image: Orderix,
    title: "orderix",
    github: "",
    demo: "https://orderix.co/",
    description: "",
    skill: ["Javascript"],
  },
];
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Marquee />
      <div className="container portfolio__container">
        {projects.map(
          ({ id, image, title, github, demo, description, skill }) => {
            let skillArr = [];
            for (let i = 0; i < skill.length; i++) {
              skillArr.push(skill[i]);
            }
            return (
              <Card
                id={id}
                image={image}
                title={title}
                github={github}
                demo={demo}
                description={description}
                skillArr={skillArr}
              />
            );
          }
        )}
      </div>
      <Marquee />
    </section>
  );
}

export default Portfolio;
