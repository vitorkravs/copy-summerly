import { useState } from "react";

//icons
import { ButtonIcon } from "../Arrow-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

//styles
import "./styles.scss";

const Header = () => {
  //gerencia o estado do menu: ativo(true) ou desativado(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //muda o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //Se o menu estiver ativo, a opção de touchmove(rolagem da página) é desativada.
  if (isMenuOpen) {
    document.body.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
  }

  return (
    <header id="header-container">
      <div id="menu-container">
        <img id="logo-img" src="logo-img.png" alt="Logo do site" />
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <div id="nav-container" className={isMenuOpen ? "active" : ""}>
        <div id="close-menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: "130%" }} />
        </div>
        <div id="nav-links-container">
          <nav id="nav-options">
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
          <div id="nav-icons-container">
            <a href="/">
              <div className="icons">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ fontSize: "70%" }}
                />
              </div>
            </a>
            <a href="/">
              <div className="icons">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "70%" }}
                />
              </div>
            </a>
            <a href="/">
              <div className="icons">
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "70%" }} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
