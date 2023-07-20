import Header from "../../components/header/Header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertylist/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties.jsx";

import "./home.css";
import MailList from "../../components/mailList/MailList.jsx";

function Home() {
  {
    /* This is our home page to render in our main App.js */
  }

  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Découvrez nos types de propriété</h1>
        <PropertyList />
        <h1 className="homeTitle">Nos meilleurs propriétés</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </div>
  );
}

export default Home;
