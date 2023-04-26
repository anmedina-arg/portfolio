import React from "react";
import CV from "../../assets/Andres Medina Fullstack-dev-eng.pdf";
import Button from "../ui/buttons/Button";

function CTA() {
  return (
    <div className="cta">
      <Button reference={CV} text='Download CV'/>
      <a href="#contact" className="btn btn-primary">
        Let´s talk
      </a>
    </div>
  );
}

export default CTA;
