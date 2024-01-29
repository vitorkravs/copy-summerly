import { ButtonIcon } from "../Arrow-icon";

import "./styles.scss";

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button id="default-button">
      {text}
      <ButtonIcon />
    </button>
  );
};

export default Button;
