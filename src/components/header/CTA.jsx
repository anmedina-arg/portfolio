import React from "react";
import CV from "../../assets/Andres Medina Fullstack-dev-eng.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let´s talk
      </a>
    </div>
  );
}

export default CTA;
