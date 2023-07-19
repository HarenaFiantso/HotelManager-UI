import "./navbar.css";

function Navbar() {
  {
    /* This is the Navigation bar of our Home/Main page application */
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <h1 className="logo">DreamHotel</h1>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
