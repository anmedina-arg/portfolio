import React, { useState } from "react";
import "./nav.css";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageRoundedEdit } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { ImFolderOpen } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";

function Nav() {
  let [active, setActive] = useState();

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <HiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <GiSkills />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <ImFolderOpen />
      </a>
      <a
        href="#recomendations"
        onClick={() => setActive("#recomendations")}
        className={active === "#recomendations" ? "active" : ""}
      >
        <FaUserFriends />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageRoundedEdit />
      </a>
    </nav>
  );
}

export default Nav;
