import ImageOne from "../../assets/HOTEL-1.webp";
import ImageTwo from "../../assets/HOTEL-2.jpg";
import ImageThree from "../../assets/HOTEL-3.jpeg";
import ImageFour from "../../assets/HOTEL-6.jpg";

import "./featuredProperties.css";

function FeaturedProperties() {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={ImageOne} alt="" className="fpImg" />
        <div className="fpDetails">
          <span className="fpName">ETS Hotel</span>
          <span className="fpCity">Behenjy</span>
          <span className="fpPrice">À partir de 69.000ar</span>
          <div className="fpRating">
            <button>9.6</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageTwo} alt="" className="fpImg" />
        <div className="fpDetails">
          <span className="fpName">ETS Hotel</span>
          <span className="fpCity">Behenjy</span>
          <span className="fpPrice">À partir de 69.000ar</span>
          <div className="fpRating">
            <button>9.6</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageThree} alt="" className="fpImg" />
        <div className="fpDetails">
          <span className="fpName">ETS Hotel</span>
          <span className="fpCity">Behenjy</span>
          <span className="fpPrice">À partir de 69.000ar</span>
          <div className="fpRating">
            <button>9.6</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageFour} alt="" className="fpImg" />
        <div className="fpDetails">
          <span className="fpName">ETS Hotel</span>
          <span className="fpCity">Behenjy</span>
          <span className="fpPrice">À partir de 69.000ar</span>
          <div className="fpRating">
            <button>9.6</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageOne} alt="" className="fpImg" />
        <div className="fpDetails">
          <span className="fpName">ETS Hotel</span>
          <span className="fpCity">Behenjy</span>
          <span className="fpPrice">À partir de 69.000ar</span>
          <div className="fpRating">
            <button>9.6</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageTwo} alt="" className="fpImg" />
        <div className="fpDetails">
          <span className="fpName">ETS Hotel</span>
          <span className="fpCity">Behenjy</span>
          <span className="fpPrice">À partir de 69.000ar</span>
          <div className="fpRating">
            <button>9.6</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageThree} alt="" className="fpImg" />
        <div className="fpDetails">
          <span className="fpName">ETS Hotel</span>
          <span className="fpCity">Behenjy</span>
          <span className="fpPrice">À partir de 69.000ar</span>
          <div className="fpRating">
            <button>9.6</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>

      <div className="fpItem">
        <img src={ImageFour} alt="" className="fpImg" />
        <div className="fpDetails">
          <span className="fpName">ETS Hotel</span>
          <span className="fpCity">Behenjy</span>
          <span className="fpPrice">À partir de 69.000ar</span>
          <div className="fpRating">
            <button>9.6</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
