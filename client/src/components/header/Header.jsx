import {
  faBed, faCalendarDays, faPerson,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {format} from "date-fns";
import {useNavigate} from "react-router-dom";
import {DateRange} from "react-date-range";

import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([{
    startDate: new Date(), endDate: new Date(), key: "selection"
  }]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({adult: 1, children: 0, room: 1});

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", {state: {destination, date, options}});
  };

  return (<div className="header">
    <div
      className={type === "list" ? "headerContainer listMode" : "headerContainer"}
    >
      {type !== "list" && (<>

        {/* Dans la section suivante, on va trouver le texte de la section header. Je pense que c'est facile à lire */}
        <h1 className="headerTitle">Bienvenue sur DreamHotel !</h1>
        <p className="headerDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          culpa velit, impedit quis ipsum nobis pariatur modi minus consectetur
          sunt dignissimos beatae possimus vel sapiente nesciunt accusantium
          dolorem consequatur enim!
        </p>
        <a href="#" className="headerBtn">
          S'enregistrer / S'identifier
        </a>

        {/* Dans la section suivante, on va trouver le panneau de recherche d'hotel pour l'utilisateur */}
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
            <input
              type="text"
              placeholder="Où allons nous ?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (<DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />)}
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{`${options.adult} adulte(s) · ${options.children} children(s) · ${options.room} salle(s)`}</span>
            {openOptions && (<div className="options">
              <div className="optionItem">
                <span className="optionText">Adulte(s)</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Enfant(s)</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                          {options.children}
                        </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Salle(s)</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                          {options.room}
                        </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>)}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>
              Chercher
            </button>
          </div>
        </div>
      </>)}
    </div>
  </div>);
};

export default Header;
