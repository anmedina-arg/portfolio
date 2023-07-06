import React from "react";
import "./home.css";
import DownloadNav from "../../components/downloads-nav/download-nav";
import ME from "../../assets/me-sin-fondo.png";

function Home() {
  return (
    <header>
      <div className="container container__header">
        <div className="title__container">
          <h5>Hello I´m</h5>
          <h1>Andrés Medina</h1>
          <h2 className="text-light">Fullstack developer</h2>
        </div>
        <DownloadNav />
        <div className="about">
          <div className="about__text">
            <h3 className="about__me">About me</h3>
            <p>
              I am a proactive and responsible person. I like new challenges,
              research, study and learn new things. This has led me to train as
              a Full-Stack Developer with main stack JavaScript and NodeJS. I
              developed my experience in the IT world at Henry's bootcamp, where
              I have carried out different projects, individually and as a team!
              In addition, I generated solid and important soft skills during
              his 12 years of experience as an Industrial Engineer where I led
              work teams, developing people in soft skills such as
              communication, feedback, inclusion, diversity, teamwork and
              continuous improvement.
            </p>
          </div>
          <div className="me">
            <img className="picture" src={ME} alt="me" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
