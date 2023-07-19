import "./header.css";

function Header({ type }) {
  {
    /* This is the header components of our home page */
  }
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Bienvenue sur DreamHotel !</h1>
            <p className="headerDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              distinctio pariatur labore vel corporis laboriosam aut molestiae
              ab aliquam doloremque corrupti expedita odio culpa obcaecati, esse
              placeat tempore accusantium. Distinctio!
            </p>
            <a href="#" class="headerButton">
              S'identifier / S'enregistrer
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
