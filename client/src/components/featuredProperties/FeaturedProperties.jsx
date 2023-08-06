/* import ImageOne from "../../assets/rooms/1.png";
import ImageTwo from "../../assets/rooms/2.png";
import ImageThree from "../../assets/rooms/3.png";
import ImageFour from "../../assets/rooms/4.png";
import ImageFive from "../../assets/rooms/5.png";
import ImageSix from "../../assets/rooms/6.png";
import ImageSeven from "../../assets/rooms/7.png"; */

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "./room.jpg"

import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(`http://localhost:8000/api/hotels?limit=4`);
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
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={Image} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <FontAwesomeIcon icon={faHeart} className="icon" />
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
