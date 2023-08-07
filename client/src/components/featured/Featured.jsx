import "./featured.css";
import Antananarivo from "./Antananarivo.jpg";
import Mahajanga from "./Mahajanga.webp"
import Toamasina from "./Toamasina.jpg"
import { useFetch } from "use-http";
import { useEffect, useState } from "react";

function getImageForCity(cityName) {
  switch (cityName) {
    case "Antananarivo":
      return Antananarivo;
    case "Mahajanga":
      return Mahajanga;
    case "Toamasina":
      return Toamasina;
    case "Fianarantsoa":
      return Mahajanga;
    case "Toliara":
      return Toamasina;
    case "Antsiranana":
      return Antananarivo;
    // Ajoutez d'autres cas ici si nécessaire pour couvrir d'autres noms de ville
    default:
      return "default_image_url.jpg";
  }
}

function Featured() {
  const [data, setData] = useState([]);
  const {get, response, error, loading} = useFetch('http://localhost:8000');

  async function getCities (){
    const cities = await get('/city/count');
    if(response.ok) setData(cities);
  }

  useEffect(() => {
    getCities();
  }, [])

  return (
    <div className="featured" id="property">
      {loading && "Loading"}
      {error && "Erreur"}
      {data.map((city) => {
            return (
              <div key={city.id} className="featuredItem">
                <img src={Antananarivo} alt={city.name} className="featuredImg" />
                <div className="featuredTitles">
                  <h1>{city.name}</h1>
                  <h2>{city.hotel_count} hôtels</h2>
                </div>
              </div>
            );
          })
      }
    </div>
  );
}

export default Featured;
