import { Link } from "react-router-dom";
import "./hotelDescription.css";
import Image from "./1.png";

const HotelDescription = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photo} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.room_type_name} {item.id}</h1>
        <span>{ item.options.map(option => `${option.name} -`) }</span>
        <p>{item.description}</p>
      </div>
      <div className="siDetails">
          <div className="siRating">
            <button>{item.total_price} $</button>
          </div>
        <div className="siDetailTexts">
          <Link to={`/room/reserve/${item.id}`}>
            <button className="siCheckButton">Réserver</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelDescription;
