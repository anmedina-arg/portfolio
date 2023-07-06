import React from "react";
import Contact from "./sections/contact/Contact";
import Experience from "./sections/experience/Experience";
import Footer from "./sections/footer/Footer";
import Home from "./sections/home/Home";
import Nav from "../src/components/nav/Nav";
import Portfolio from "./sections/portfolio/Portfolio";
import Recomendations from "./sections/recomendations/Recomendations";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Experience />
      <Portfolio />
      <Recomendations />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
