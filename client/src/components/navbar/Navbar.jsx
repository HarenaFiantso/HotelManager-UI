import {faBeer, faRightToBracket, faCoffee, faChampagneGlasses} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./navbar.css";

function Navbar() {
  {
    /* This is the Navigation bar of our Home/Main page application */
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <h1 className="logo">DreamHotel</h1>
        <div className="navItems">
          <a href="#" className="button">
            <FontAwesomeIcon icon={faBeer}/>
          </a>
          <a href="#" className="button">
            <FontAwesomeIcon icon={faCoffee}/>
          </a>
          <a href="#" className="button">
            <FontAwesomeIcon icon={faChampagneGlasses}/>
          </a>
          <a href="#" className="button">
            <FontAwesomeIcon icon={faRightToBracket}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
