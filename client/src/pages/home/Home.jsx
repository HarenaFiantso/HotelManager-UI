import Header from "../../components/header/Header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertylist/PropertyList";

import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Découvrez nos types de propriété</h1>
        <PropertyList />
      </div>
    </div>
  );
}

export default Home;
