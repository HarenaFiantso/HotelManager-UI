import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "./room.jpg";

import { useFetch } from "use-http";
import "./featuredProperties.css";
import { useEffect, useState } from "react";

const FeaturedProperties = () => {
  const [data, setData] = useState([]);
  const { get, response, error, loading } = useFetch('http://localhost:8000');

  async function fetchBestHotels() {
    const initialHotels = await get('/hotels/rate');
    const hotels = await Promise.all(initialHotels.map(async hotel => {
      const city = await get(`/city/${hotel.id_city}`);
      hotel.city = city[0].name;
      return hotel;
    }))
    if(response.ok) setData(hotels);
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
          <div className="fpItem" key={hotel.id}>
            <img src={hotel.photo} alt="" className="fpImg" />
            <span className="fpName">{hotel.name}</span>
            <span className="fpCity">{hotel.city}</span>
            <div className="fpRating">
              <button>{hotel.total_rate}</button>
            </div>
          </div>);
      })}
    </div>
  );
};

export default FeaturedProperties;
