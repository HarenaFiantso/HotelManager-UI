import "./propertyList.css";
import ImageOne from "../../assets/HOTEL-1.webp";
import ImageTwo from "../../assets/HOTEL-2.jpg";
import ImageThree from "../../assets/HOTEL-3.jpeg";
import ImageFour from "../../assets/HOTEL-6.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

function PropertyList() {
  return (
    <div className="propertyContainer">
      <div className="propertyList">
        <div className="propertyListItem">
          <img src={ImageOne} className="propertyListImg" alt="" />
          <div className="propertyListTitles">
            <div className="propertyListTitlesText">
              <h1>Hotels</h1>
              <h2>69 Hotels</h2>
            </div>
            <FontAwesomeIcon
              icon={faCloudMoon}
              className="propertyListTitlesIcon"
            />
          </div>
        </div>

        <div className="propertyListItem">
          <img src={ImageTwo} className="propertyListImg" alt="" />
          <div className="propertyListTitles">
            <div className="propertyListTitlesText">
              <h1>Appartements</h1>
              <h2>69 Appartements</h2>
            </div>
            <FontAwesomeIcon
              icon={faCloudMoon}
              className="propertyListTitlesIcon"
            />
          </div>
        </div>

        <div className="propertyListItem">
          <img src={ImageThree} className="propertyListImg" alt="" />
          <div className="propertyListTitles">
            <div className="propertyListTitlesText">
              <h1>Bungalow</h1>
              <h2>69 Bungalows</h2>
            </div>
            <FontAwesomeIcon
              icon={faCloudMoon}
              className="propertyListTitlesIcon"
            />
          </div>
        </div>

        <div className="propertyListItem">
          <img src={ImageFour} className="propertyListImg" alt="" />
          <div className="propertyListTitles">
            <div className="propertyListTitlesText">
              <h1>Villas</h1>
              <h2>69 Villas</h2>
            </div>
            <FontAwesomeIcon
              icon={faCloudMoon}
              className="propertyListTitlesIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
