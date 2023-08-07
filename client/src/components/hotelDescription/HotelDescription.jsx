import { Link } from "react-router-dom";
import "./hotelDescription.css";
import Image from "./1.png";

const HotelDescription = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photo} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siFeatures">{item.address}</span>
      </div>
      <div className="siDetails">
        {item.total_rate && (
          <div className="siRating">
            <button>{item.total_rate}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <Link to={`/hotels/${item.id}`}>
            <button className="siCheckButton">Voir les détails</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelDescription;