import { faUser, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";

function Navbar() {
  {
    /* This is the Navigation bar of our Home/Main page application */
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <h1 className="logo">DreamHotel</h1>
        <div class="navItems">
          <a href="#" class="button">
            Register <FontAwesomeIcon icon={faUser} />
          </a>
          <a href="#" class="button">
            Login <FontAwesomeIcon icon={faRightToBracket} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
