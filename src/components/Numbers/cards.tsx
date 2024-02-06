import "./cards.scss";

type CardProps = {
  title: string;
  text: string;
  emoji: string;
};

const Card: React.FC<CardProps> = ({ title, text, emoji }) => {
  return (
    <div id="card-container">
      <div className="icon">
        <img
          src={emoji}
          loading="lazy"
          alt="emoji de fogo"
          className="icon-fire"
        />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Card;
