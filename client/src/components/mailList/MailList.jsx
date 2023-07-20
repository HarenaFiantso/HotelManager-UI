import "./mailList.css";

function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Économise ton argent, choisis DreamHotel ! </h1>
      <span className="mailDesc">
        Rejoins nous et nous te donnerons le meilleur de nous même
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Rejoindre</button>
      </div>
    </div>
  );
}

export default MailList;
