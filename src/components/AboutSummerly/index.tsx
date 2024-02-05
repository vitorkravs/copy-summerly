import "./styles.scss";

const AboutSummerly = () => {
  return (
    <section id="about-container">
      <div className="about-one">
        <div className="about-text">
          <h3>
            Nosso <span>sucesso</span>
            <br /> fala por nós
          </h3>
          <p>
            É hora de você confiar suas redes sociais a alguém que saiba como
            fazer isso por si mesmo. Summer, dona da Summerly Media, começou
            tudo com suas redes sociais pessoais e agora ajuda centenas de
            empresas a fazerem o mesmo.
          </p>
        </div>
        <div className="about-img">
          <img
            className="img-one"
            src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d1466b88b7bd5e4d4df7c3_About_Phone_1.png"
          ></img>
          <img
            className="img-two"
            src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d14878c75ced415efa1022_About_image_2.png"
          ></img>
        </div>
      </div>
      <div className="about-two">
        <div className="about-text">
          <h3>
            O que <span>nós fazemos</span>
          </h3>
          <p>
            Esteja você apenas começando ou investindo milhões em marketing,
            podemos ajudá-lo a usar a mídia social para atingir seus objetivos.
            Com nossa abordagem genuína e baseada no consumidor, podemos levar
            seu aplicativo, produto, serviço ou página pessoal aos olhos de
            pessoas reais por meio de marketing de mídia social orgânico e pago.
          </p>
        </div>
        <div className="about-video">
          <img src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d81b4b706f9e5ef2013ca1_iPhone%2014%20Pro.png"></img>
          <video preload="auto" playsInline autoPlay loop muted>
            <source
              src="https://uploads-ssl.webflow.com/63d0f8b43ca85422d48a69d6/63d945cd195e98491440ea47_skm-viveo-transcode.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default AboutSummerly;
