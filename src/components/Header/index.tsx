import { ButtonIcon } from "../Arrow-icon";
import "./styles.scss";

const Header = () => {
  return (
    <header id="header-container">
      <img src="logo-img.png" alt="Logo do site" />
      <nav id="menu-options">
        <a href="/">O que nós oferecemos</a>
        <a href="/">Como funciona</a>
        <a href="/">Portfólio</a>
      </nav>
      <button id="button-header-contact" className="btn-face">
        Contate-nos
        <ButtonIcon />
      </button>
    </header>
  );
};

export default Header;
