import React from "react";
import "./recomendations.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import GABY from "../../assets/gaby.jpeg";
import CATA from "../../assets/Cata.png";
import NICO from "../../assets/Nico.jpg";
import ADRIAN from "../../assets/Adrian.jpeg";
import GIAN from "../../assets/Gian.jpg";

function Recomendations() {
  //vamos a generar un array con los comentarios, como en el componente portfolio con los proyectos

  const reviews = [
    {
      id: 1,
      avatar: GABY,
      name: "Gabriel Wheht",
      review:
        "Con Andrés pasamos muchísimas horas debugenado código, ayudándonos siempre a encontrar errores, a mejorar códigos, a compartir los que ya teníamos. Sin dudas un gran compañero de equipo, siempre explicando lo que sabe y aprendiendo constantemente. Muchas gracias por estos meses de codear juntos Andy!",
    },
    {
      id: 2,
      avatar: CATA,
      name: "Catalina Santini Echegaray",
      review:
        "Andrés es una persona capaz, flexible y con ganas de aprender constantemente. Trabajamos juntos en nuestro Proyecto Final en el bootcamp de Henry y nos hizo el trabajo del día a día mucho más fácil y ameno. Sumamente recomendable para trabajar en equipo.",
    },
    {
      id: 3,
      avatar: NICO,
      name: "Nicolás Joel Marineli",
      review:
        "Andy es un tipazo, estudiamos juntos en el bootcamp de SoyHenry y fue un verdadero placer.Trabajamos juntos en el desarrollo del proyecto final de dicho bootcamp, donde andy fue una parte fundamental del mismo. Un genio total.",
    },
    {
      id: 4,
      avatar: ADRIAN,
      name: "Adrian Quintana",
      review:
        "Tuve el gusto de trabajar y estudiar con Andres. Es un gran compañero de equipo, siempre dispuesto a ayudar a resolver los problemas y a trabajar codo a codo con responsabilidad y compromiso.",
    },
    {
      id: 4,
      avatar: GIAN,
      name: "Gianfranco Gobbi",
      review:
        "Tuve la suerte de conocer a Andres en el bootcamp de Henry, la verdad que es uno de los que más compañero fue, siempre dispuesto a ayudar a todo el equipo, es un Developer con todas las letras.",
    },
  ];
  return (
    <section id="recomendations">
      <h5>Some references</h5>
      <h2>Recomendations</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        // className="mySwiper"
        className="container recomendations__container"
      >
        {reviews.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Recomendations;
