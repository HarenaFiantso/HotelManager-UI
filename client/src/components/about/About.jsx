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
            DreamHotel est une plateforme de gestion d'hôtel complète et
            intuitive conçue pour optimiser vos opérations hôtelières. Gérez
            facilement toutes les facettes de votre établissement, de la
            réservation en ligne à la gestion des tarifs et des promotions.
            Offrez une expérience exceptionnelle à vos clients tout en gardant
            le contrôle de votre hôtel où que vous soyez. Faites de la gestion
            de votre hôtel une expérience agréable et réussie avec DreamHotel
          </p>

          <div className="about__buttons">
            <a href="#contact" className="button button--flex">
              Contactez-nous <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
