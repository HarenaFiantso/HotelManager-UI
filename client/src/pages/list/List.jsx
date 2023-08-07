import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import { useFetch } from "use-http";

function List() {
  const location = useLocation();

  let customDates;
  let customDestination;

  if(location.state === null){
    customDates = [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      }
    ];
    customDestination = "";
  }else {
    customDestination = location.state.destination;
    customDates = location.state.dates
  }

  const [destination, setDestination] = useState(customDestination);
  const [dates, setDates] = useState(customDates);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [data, setData] = useState([]);
  const { get, post, response, error, loading } = useFetch('http://localhost:8000');

  async function searchHotels() {
    let hotels = [];
    if (destination == "") {
      hotels = await get('/hotels/rate');
    } else {
      hotels = await post('/hotels/available',
        {
          city_name: destination,
          start_date: dates[0].startDate,
          end_date: dates[0].endDate
        }
      );
    }

    if(response.ok) setData(hotels);
  }

  useEffect(() => { searchHotels() }, [])


  const handleClick = () => {
    searchHotels();
  };

  return (
    <div>
      <Navbar />
      <h1 className="title">Voici la liste des hotels</h1>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Chercher</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" onChange={
                (e) => setDestination(e.target.value)
              } />
            </div>
            <div className="lsItem">
              <label>Choisir les dates de séjour</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} À ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <button onClick={handleClick}>Chercher</button>
          </div>
          <div className="listResult">
            {loading && "Loading"}
            {error && "error"}
            {
              data.length === 0 ? <h1>Aucun hôtel ne se trouve dans la destination recherchée</h1> :
                data.map(hotel => {
                  return (
                    <SearchItem item={hotel} key={hotel.id} start={dates[0].startDate} end={dates[0].endDate}/>
                  )
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
