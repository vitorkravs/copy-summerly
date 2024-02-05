import "./styles.scss";

const ClientTrust = () => {
  return (
    <section id="client-trust-container">
      <h3>Confiado por</h3>

      <div id="client-list">
        <div className="client-row-one">
          <div className="client-container">
            <img
              src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d3df6fb38a3f51302d5d00_walmart.svg"
              alt="Logo Walmart"
              className="walmart"
            ></img>
          </div>
          <div className="client-container">
            <img
              src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d145151f7d3b68b8eca4f0_grow-therapy.svg"
              alt="Logo Grow Therapy"
              className="grow-therapy"
            ></img>
          </div>
          <div className="client-container">
            <img
              src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d14515ec1e97a2f6bcd98f_nordstrom.svg"
              alt="Logo Norstrom"
              className="norstrom"
            ></img>
          </div>
        </div>
        <div className="client-row-two">
          <div className="client-container">
            <img
              src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1451541b400081fe498e8_avene.svg"
              alt="Logo Avéne"
              className="avene"
            ></img>
          </div>
          <div className="client-container">
            <img
              src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1451462b7fa42bf6ddf01_popflex.svg"
              alt=""
              className="popflex"
            ></img>
          </div>
          <div className="client-container">
            <img
              src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1451532a91de6811b67cb_sweet-sweat.svg"
              alt="Logo Sweet Sweat"
              className="sweet-sweat"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTrust;
