/* import ImageOne from "../../assets/rooms/1.png";
import ImageTwo from "../../assets/rooms/2.png";
import ImageThree from "../../assets/rooms/3.png";
import ImageFour from "../../assets/rooms/4.png";
import ImageFive from "../../assets/rooms/5.png";
import ImageSix from "../../assets/rooms/6.png";
import ImageSeven from "../../assets/rooms/7.png"; */

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "./room.jpg";

import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

function getCityName(cityCode) {
  switch (cityCode) {
    case "1":
      return "Antananarivo";
    case "2":
      return "Mahajanga";
    case "3":
      return "Toamasina";
    case "4":
      return "Fianarantsoa";
    case "5":
      return "Toliara";
    case "6":
      return "Antsiranana";
    // Ajoutez d'autres cas ici si nécessaire pour couvrir d'autres codes de ville
    default:
      return "Unknown City";
  }
}

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    `http://localhost:8000/api/hotels?featured=true&limit=4`
  );
  console.log(data);
  /*   return (
    <div className="fp">
      <div className="fpItem">
        <img src={ImageOne} alt="" className="fpImg" />
        <span className="fpName">ETS Hotel</span>
        <span className="fpCity">Behenjy</span>
        <span className="fpPrice">À partir de 69.000ar</span>
        <div className="fpRating">
          <button>9.6</button>
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageTwo} alt="" className="fpImg" />
        <span className="fpName">ETS Hotel</span>
        <span className="fpCity">Behenjy</span>
        <span className="fpPrice">À partir de 69.000ar</span>
        <div className="fpRating">
          <button>9.6</button>
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageThree} alt="" className="fpImg" />
        <span className="fpName">ETS Hotel</span>
        <span className="fpCity">Behenjy</span>
        <span className="fpPrice">À partir de 69.000ar</span>
        <div className="fpRating">
          <button>9.6</button>
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageFour} alt="" className="fpImg" />
        <span className="fpName">ETS Hotel</span>
        <span className="fpCity">Behenjy</span>
        <span className="fpPrice">À partir de 69.000ar</span>
        <div className="fpRating">
          <button>9.6</button>
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageFive} alt="" className="fpImg" />
        <span className="fpName">ETS Hotel</span>
        <span className="fpCity">Behenjy</span>
        <span className="fpPrice">À partir de 69.000ar</span>
        <div className="fpRating">
          <button>9.6</button>
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageSix} alt="" className="fpImg" />
        <span className="fpName">ETS Hotel</span>
        <span className="fpCity">Behenjy</span>
        <span className="fpPrice">À partir de 69.000ar</span>
        <div className="fpRating">
          <button>9.6</button>
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageSeven} alt="" className="fpImg" />
        <span className="fpName">ETS Hotel</span>
        <span className="fpCity">Behenjy</span>
        <span className="fpPrice">À partir de 69.000ar</span>
        <div className="fpRating">
          <button>9.6</button>
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageOne} alt="" className="fpImg" />
        <span className="fpName">ETS Hotel</span>
        <span className="fpCity">Behenjy</span>
        <span className="fpPrice">À partir de 69.000ar</span>
        <div className="fpRating">
          <button>9.6</button>
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </div>
      </div>
    </div>
  ); */

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => {
            const cityName = getCityName(item.id_city);
            return (
              <div className="fpItem" key={item._id}>
              <img src={Image} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{cityName}</span>
              <span className="fpPrice">
                À partir de {item.cheapestprice} Ar
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <FontAwesomeIcon icon={faHeart} className="icon" />
                </div>
              )}
            </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
