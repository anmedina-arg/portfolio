import React from "react";
import CV from "../../assets/Andrés_Medina_Fullstack.pdf";

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
