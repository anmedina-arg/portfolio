import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function HeaderSocial() {
  return (
    <div className="header__social">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocial;
