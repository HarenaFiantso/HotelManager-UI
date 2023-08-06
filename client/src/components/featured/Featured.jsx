import useFetch from "../../hooks/useFetch";
import "./featured.css";
import Antananarivo from "./Antananarivo.jpg";
import Mahajanga from "./Mahajanga.webp"
import Toamasina from "./Toamasina.jpg"

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
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/hotels/countByCity?cities=1,2,3,4,5,6"
  );

  return (
    <div className="featured" id="property">
      {loading
        ? "Loading please wait"
        : data.map((cityData) => {
            const cityName = getCityName(cityData.city);
            const imageUrl = getImageForCity(cityName);

            return (
              <div key={cityData.city} className="featuredItem">
                <img src={imageUrl} alt={cityName} className="featuredImg" />
                <div className="featuredTitles">
                  <h1>{cityName}</h1>
                  <h2>{cityData.count} properties</h2>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default Featured;
