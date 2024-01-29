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
import { OpenNav } from "../nav-icon-close";
import Button from "../Button/Button";

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
        <div id="img-container">
          <img id="logo-img" src="logo-img.png" alt="Logo do site" />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <OpenNav />
        </button>
        <div id="nav-container" className={isMenuOpen ? "active" : "desktop"}>
          <div id="close-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faXmark} style={{ fontSize: "160%" }} />
          </div>
          <div id="nav-links-container">
            <div id="teste">
              <nav id="nav-options">
                <a href="/">O que nós oferecemos</a>
                <a href="/">Como funciona</a>
                <a href="/">Portfólio</a>
              </nav>
              <div
                id="button-header-contact"
                className={isMenuOpen ? "active" : "desktop"}
              >
                <Button text={"contate-nos"} />
              </div>
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
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ fontSize: "70%" }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="hero-box">
        <div className="hero-heading-part-box">
          <h2>Agência de mídia</h2>
        </div>
        <div className="hero-heading-part-box">
          <h2>Liderada por</h2>
        </div>
        <div className="hero-heading-part-box">
          <h2>Influenciadores</h2>
        </div>

        <div className="hero-animation-box">
          <p>
            Alcance seu público-alvo de maneira genuína por meio de crescimento
            pago e orgânico em
            <span>TikTok, Instagram, YouTube, Pinterest</span> and more by a
            team of content creators with a proven track record.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
