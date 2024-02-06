import "./styles.scss";

import Card from "./cards";

const Numbers = () => {
  return (
    <section id="numbers-container">
      <div className="number-wrapper">
        <h3>O que fazemos organicamente</h3>
        <div className="cards-flex">
          <Card
            title="167M+"
            text="visualizações e contagem"
            emoji="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1807dd0496a3408c33ef6_fire.png"
          />
          <Card
            title="6 Figuras"
            text="das vendas realizadas"
            emoji="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1817103a283fad7f2c9b8_money-bag.png"
          />
          <Card
            title="1,9 milhão +"
            text="seguidores ganhos"
            emoji="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1817199200fbcabd3b1bc_chart-increasing.png"
          />
        </div>
      </div>
      <div className="number-wrapper copy">
        <h3>O que fazemos por meio de anúncios pagos</h3>
        <div className="cards-flex">
          <Card
            title="630M+"
            text="visualizações e contagem"
            emoji="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d187a871aadb6252940663_party-popper.png"
          />
          <Card
            title="1.2 milhões"
            text="à venda"
            emoji="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1817103a283fad7f2c9b8_money-bag.png"
          />
          <Card
            title="1800+"
            text="chamadas reservadas para clientes"
            emoji="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1817199200fbcabd3b1bc_chart-increasing.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Numbers;
