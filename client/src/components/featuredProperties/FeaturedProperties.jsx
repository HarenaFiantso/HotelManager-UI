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

import { useFetch } from "use-http";
import "./featuredProperties.css";
import { useEffect, useState } from "react";

const FeaturedProperties = () => {
  const [data, setData] = useState([]);
  const { get, post, response, error, loading } = useFetch('http://localhost:8000');

  async function fetchBestHotels() {
    const hotels = await get('/hotels/rate');
    if (response.ok) setData(hotels);
  }

  useEffect(() => {
    fetchBestHotels();
  }, []);

  return (
    <div className="fp">
      {loading && "Chargement"}
      {error && "Erreur lors du chargement"}
      {data.map(hotel => {
        return (
          <div className="fpItem">
            <img src={hotel.photo} alt="" className="fpImg" />
            <span className="fpName">{hotel.name}</span>
            <div className="fpRating">
              <button>{hotel.total_rate}</button>
            </div>
          </div>);
      })}
    </div>
  );
};

export default FeaturedProperties;
