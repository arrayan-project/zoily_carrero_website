import React from "react";
import "./Footer2.css";

const Footer2: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer2" className="footer2-footer">
      <div className="footer2-col footer2-col1">
        <h3 className="footer2-h3">SoyZoilyCarrero</h3>
        <p className="footer2-p">
          Hecho con <span style={{ color: "#BA6573" }}>❤</span> por ZoilyCarrero
        </p>
        <div className="footer2-social">
          <a
            href="https://codepen.io/Juxtopposed"
            target="_blank"
            className="footer2-link"
          >
            <img
              src="https://assets.codepen.io/9051928/codepen_1.png"
              alt="Codepen"
            />
          </a>
          <a
            href="https://twitter.com/juxtopposed"
            target="_blank"
            className="footer2-link"
          >
            <img src="https://assets.codepen.io/9051928/x.png" alt="Twitter" />
          </a>
          <a
            href="https://youtube.com/@juxtopposed"
            target="_blank"
            className="footer2-link"
          >
            <img
              src="https://assets.codepen.io/9051928/youtube_1.png"
              alt="YouTube"
            />
          </a>
        </div>
        <p className="footer2-copyright">
          {currentYear} © All Rights Reserved
        </p>
      </div>
      <div className="footer2-col footer2-col2">
        <p className="footer2-p">Acerca De</p>
        <p className="footer2-p">Our mission</p>
        <p className="footer2-p">Politica de privacidad</p>
        <p className="footer2-p">Terminos de servicio</p>
      </div>
      <div className="footer2-col footer2-col3">
        <p className="footer2-p">Servicios</p>
        <p className="footer2-p">Productos</p>
        <p className="footer2-p">Cursos</p>
        <p className="footer2-p">Contacto</p>
      </div>
      <div className="footer2-backdrop"></div>
    </footer>
  );
};

export default Footer2;
