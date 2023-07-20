import "./featured.css";
import ImageOne from "../../assets/HOTEL-1.webp";
import ImageTwo from "../../assets/HOTEL-2.jpg";
import ImageThree from "../../assets/HOTEL-3.jpeg";

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
          <h2>69 propriétés</h2>
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
          <h2>69 propriétés</h2>
        </div>
      </div>
    </div>
  );
}

export default featured;
