import {
  faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

import "./header.css";

function Header({type}) {
  {
    /* This is the header components of our home page */
  }
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    }
  ]);

  return (<div className="header">
    <div
      className={type === "list" ? "headerContainer listMode" : "headerContainer"}
    >
      {type !== "list" && (<>

        {/* This is the text to appear in the header section */}
        <h1 className="headerTitle">Bienvenue sur DreamHotel !</h1>
        <p className="headerDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          distinctio pariatur labore vel corporis laboriosam aut molestiae
          ab aliquam doloremque corrupti expedita odio culpa obcaecati, esse
          placeat tempore accusantium. Distinctio!
        </p>
        <a href="#" className="headerButton">
          S'identifier / S'enregistrer
        </a>

        {/* This is search pannel to en bas du text
          J'ai fait reference à booking.com au cas où vous n'avez pas la ref
        */}
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
            <input type="text" placeholder="Où allez-vous ?" className="headerSearchInput"/>
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
            <span className="headerSearchText">Jour pour jour</span>
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
            <span className="headerSearchText">2 adultes 2 enfants 1 salle</span>
          </div>

          <div className="headerSearchItem">
            <a href="#" className="headerSearchButton">Chercher</a>
          </div>
        </div>
      </>)}
    </div>
  </div>);
}

export default Header;
