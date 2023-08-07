import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import Sidebar from "../../components/sidebar/Sidebar";
import HotelDescription from "../../components/hotelDescription/HotelDescription";
import { useFetch } from "use-http";

function Hotel() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  let startDate = new Date();
  let endDate = new Date();
  if(location.state){
    startDate = location.state.startDate;
    endDate = location.state.endDate;
  }
  const [data, setData] = useState([]);
  const [filterMode, setFilterMode] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchParams, setSearchParams] = useState([]);
  const { get, post, response, error, loading } = useFetch('http://localhost:8000');

  async function getAvailableRooms() {
    const initalRooms = await get(
      `/room/unserved_room/${id}?start_date=${startDate.toISOString()}&end_date=${endDate.toISOString()}
      `);
    const rooms = await Promise.all(initalRooms.map(async room => {
      const options = await get(`/room_option/room/${room.id}`);
      room.options = options;
      return room;
    }))

    if (response.ok) setData(rooms);
  }

  async function getOptionSet() {
    const optionSet = await get('/room_option')

    if (response.ok) setOptions(optionSet);
  }

  async function launchSearch() {
    if (searchParams.length === 0) {
      alert('Vous avez lancé une recherche vide');
    } else {
      setFilterMode(true);
      const newRooms = [...data].filter(room => {
        let sets = [];
        for (let i = 0; i < searchParams.length; i++) {
          const param = searchParams[i];

          const contains = room.options.some(obj => obj.id === param.id && obj.name === param.name);
          sets.push(contains);
        }
        if (!sets.includes(false)) {
          return room;
        }
      })
      setData(newRooms);
    }
  }

  const newParam = (value, data) => {
    if (value) {
      setSearchParams([...searchParams, data]);
    } else {
      setSearchParams([...searchParams].filter(
        param => param.id !== data.id
      ));
    }
  }

  useEffect(() => { getAvailableRooms(); getOptionSet() }, []);

  function terminateSearch(e){
    e.stopPropagation();
    setFilterMode(false);
    setSearchParams([]);
    getAvailableRooms();
  }

  /*
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
  }; */

  return (
    <div>
      <Navbar />
      <h1 className="title">Voici la liste des chambres disponibles</h1>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Chercher</h1>
            <div className="lsItem">
              <Sidebar options={options} insertSearchParams={newParam} />
            </div>
            <button onClick={launchSearch}>Chercher</button>
          </div>
          <div className="listResult">
            {loading && "Loading"}
            {error && "error"}
            {filterMode ? <button onClick={terminateSearch}>Réinitialiser la recherche</button> : ""}
            <br />
            {
              data.map(room => {
                return (
                  <HotelDescription key={room.id} item={room}></HotelDescription>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;



/* import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Sidebar from "../../components/sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Effectuez ici la logique pour filtrer les chambres en fonction de l'option sélectionnée
  };

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reservez maintenant ! </button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">Excellente location</span>
          <span className="hotelPriceHighlight">
            Effectuez un séjour d'à partir de 100 Ar pour cette hotel et obtenez
            un transport gratuit
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Restez au coeur de la ville</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium itaque in neque cum, consequatur obcaecati iure
                recusandae rerum voluptatum, sint ipsa voluptate aliquam sed nam
                assumenda? Perspiciatis tempore ab architecto quae similique
                enim sequi, neque delectus quibusdam maxime necessitatibus
                impedit? Tempore officiis non, ipsa porro officia tenetur nulla
                ratione ad delectus laboriosam? Tempora, sapiente.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Parfait pour un séjour de 9 nuits</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                tempore dicta earum fuga non perferendis nemo? Laboriosam ex et
                quisquam.
              </span>
              <h2>
                <b>100 Ar</b> (9 nuits)
              </h2>
              <button>Réservez maintenant !</button>
            </div>
          </div>
        </div>
        <MailList />
      </div>
    </div>
  );
};

export default Hotel; */