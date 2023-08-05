import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { faHandshake, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <header>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <span className="logo">
          {" "}
          <FontAwesomeIcon icon={faHouse} className="logoIcon" /> DreamHotel
        </span>
      </Link>
      <nav className="navbar">
          <a href="#about">À propos</a>
          <a href="#property">Propriétés</a>
          <a href="#contact">Contact</a>
      </nav>
      {user ? (
        user.username
      ) : (
        <div className="navItems">
          <button className="navButton"><FontAwesomeIcon icon={faHandshake}/></button>
          <button className="navButton"><FontAwesomeIcon icon={faUser}/></button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
