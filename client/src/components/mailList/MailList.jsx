import "./mailList.css";
import Image from "../../assets/rooms/8.png";

import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MailList = () => {
  return (
    <div className="contact" id="contact">
      <div className="row">
        <img src={Image} alt="" srcset="" className="image" />

        <form action="" className="form">
          <h3>Restez notifier par nos offres</h3>
          <div className="inputBox">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Nom" />
          </div>
          <div className="inputBox">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Email" />
          </div>
          <input type="submit" value="contactez maintenant" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default MailList;
