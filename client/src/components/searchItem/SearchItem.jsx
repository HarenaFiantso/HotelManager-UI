import { Link } from "react-router-dom";
import "./searchItem.css";
import Image from "./1.png";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={Image} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siTaxiOp">Transport gratuit</span>
        <span className="siSubtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          pariatur animi tempora voluptates neque id similique atque. Quas ad
          beatae, cupiditate dolorem numquam repellat quis unde aliquam ex
          tempore! Ea!
        </span>
        <span className="siFeatures">{item.description}</span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">{item.cheapestprice} Ariary</span>
          <span className="siTaxOp">Taxe et autres dépenses incluses</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Voir les détails</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
