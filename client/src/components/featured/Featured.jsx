import "./featured.css";
import ImageOne from "./HOTEL-2.jpg";
import ImageTwo from "./HOTEL-3.jpeg";
import ImageThree from "./HOTEL-6.jpg";

function featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={ImageOne}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Antananarivo</h1>
          <h2>69 propriétés</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src={ImageTwo}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Toamasina</h1>
          <h2>24 propriétés</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={ImageThree}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Fianarantsoa</h1>
          <h2>18 propriétés</h2>
        </div>
      </div>
    </div>
  );
}

export default featured;
