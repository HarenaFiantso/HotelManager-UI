import About from "../../components/about/About";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <About />
        <Featured />
        <h1 className="homeTitle">Nos meilleurs hotels</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </div>
  );
}

export default Home;
