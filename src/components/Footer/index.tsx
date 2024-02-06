import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import {
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div id="container">
        <div className="row-footer">
          <div className="form-container">
            <form className="form">
              <input type="text" placeholder="Assine a nossa newsletter " />
              <a href="" className="ArrowIcon">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "white", fontSize: "120%" }}
                />
              </a>
            </form>
          </div>
          <div className="social-icons">
            <a href="">
              <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
            </a>
            <a href="">
              <FontAwesomeIcon className="icon" icon={faTiktok} />
            </a>
            <a href="">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
            <a href="">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="row-footer bootom-row"></div>
      </div>
    </footer>
  );
};

export default Footer;
