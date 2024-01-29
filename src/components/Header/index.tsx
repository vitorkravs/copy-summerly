import { useState } from "react";

//icons
import { ButtonIcon } from "../Arrow-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

//styles
import "./styles.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header-container">
      <img id="logo-img" src="logo-img.png" alt="Logo do site" />

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div id="nav-container" className={isMenuOpen ? "active" : ""}>
        <div id="nav-links-container">
          <nav id="menu-options">
            <a href="/">O que nós oferecemos</a>
            <a href="/">Como funciona</a>
            <a href="/">Portfólio</a>
          </nav>
          <div id="button-header-contact">
            <button className={isMenuOpen ? "active" : ""}>
              Contate-nos
              <ButtonIcon />
            </button>
          </div>
          <div id="menu-icons">
            <a href="/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
