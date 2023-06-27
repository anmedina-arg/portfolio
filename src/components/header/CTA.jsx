import React from "react";
import CVENG from "../../assets/CV_Andres_Medina_eng.pdf";
import CVESP from "../../assets/CV_Andres_Medina_esp.pdf";
import Button from "../ui/buttons/Button";

function CTA() {
  return (
    <div className="cta">
      <Button reference={CVENG} text="Download CV" />
      <Button reference={CVESP} text="Descargar CV" />
      <a href="#contact" className="btn btn-primary">
        Let´s talk
      </a>
    </div>
  );
}

export default CTA;
