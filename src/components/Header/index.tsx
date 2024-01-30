import { useEffect, useState } from "react";

//icons
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
  console.log(isMenuOpen);
  //muda o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //Se o menu estiver ativo, a opção de touchmove(rolagem da página) é desativada.
  useEffect(() => {
    if (isMenuOpen) {
      // Adiciona ouvinte de evento para prevenir scroll
      document.body.style.overflow = "hidden";
    } else {
      // Remove ouvinte de evento para permitir scroll
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

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
        <div
          id="emojis-header-container"
          className={isMenuOpen ? "active" : ""}
        >
          <div className="icon-emoji-shopping">
            <img
              src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d187a8a7449241d438c9b9_shopping-bags.png"
              loading="lazy"
              alt=""
              className="hero_shopping"
            ></img>
          </div>
          <div className="icon-emoji-cloud">
            <img
              src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d187a866d33a81bbe2532b_cloud-with-lightning.png"
              loading="lazy"
              alt=""
              className="hero_cloud"
            ></img>
          </div>
          <div className="icon-emoji-party">
            <img
              src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d187a871aadb6252940663_party-popper.png"
              loading="lazy"
              alt=""
              className="hero_party"
            ></img>
          </div>
          <div className="icon-emoji-fire">
            <img
              src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1807dd0496a3408c33ef6_fire.png"
              loading="lazy"
              alt=""
              className="hero_fire"
            ></img>
          </div>
        </div>

        <div id="hero-text-container">
          <div className="hero-heading-part-box">
            <h2>Agência de mídia</h2>
          </div>
          <div className="hero-heading-part-box">
            <h2>Liderada por</h2>
          </div>
          <div className="hero-heading-part-box">
            <h2>Influenciadores</h2>
          </div>
        </div>

        <div id="hero-animation-box">
          <p>
            Alcance seu público-alvo de maneira genuína por meio de crescimento
            pago e orgânico no{" "}
            <span id="hero-text-bold">
              TikTok, Instagram, YouTube, Pinterest
            </span>{" "}
            e muito mais por uma equipe de criadores de conteúdo com histórico
            comprovado.
          </p>
        </div>

        <div id="button-hero">
          <Button text="Trabalhe Conosco" />
        </div>
        <img
          src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/640e177a346b3466d52f1c92_Final_ILL_FinalRGB.svg"
          loading="lazy"
          alt="mulher com celular"
          id="image-hero"
        ></img>
      </div>
    </header>
  );
};

export default Header;
