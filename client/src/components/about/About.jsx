import logo from "./Untitled7_20230805093733.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";

const About = () => {
  return (
    <div className="about section" id="about">
      <h2 className="section__title">À Propos</h2>
      <span className="section__subtitle">DreamHotel c'est quoi?</span>

      <div className="about__container container grid">
        <img src={logo} className="about__img" alt="" />

        <div className="about__data">
          <p className="about__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            beatae est incidunt ex fuga nihil. Molestiae sed quas, eaque
            exercitationem sunt excepturi enim expedita dolorem reiciendis quod,
            id ut cum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum beatae est incidunt ex fuga nihil. Molestiae sed quas,
            eaque exercitationem sunt excepturi enim expedita dolorem reiciendis
            quod, id ut cum.
          </p>

          <div className="about__buttons">
            <a href="#contact" className="button button--flex">
              Contactez-nous <FontAwesomeIcon icon={faPhone}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
