import React, { useState } from "react";
import "./reserve.css"

function Reserve() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reservationType, setReservationType] = useState("option1");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données soumises :", { startDate, endDate, reservationType });
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <label>
        Choisissez la plage de dates de séjour:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </label>

      <br />

      <label>
        Choisissez une option:
        <select
          value={reservationType}
          onChange={(e) => setReservationType(e.target.value)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>

      <br />

      <button type="submit">Effectuer la Réservation</button>
    </form>
  );
}

export default Reserve;


/* function ReservationForm() {


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choisissez la plage de dates de séjour:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </label>

      <br />

      <label>
        Choisissez une option:
        <select
          value={reservationType}
          onChange={(e) => setReservationType(e.target.value)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>

      <br />

      <button type="submit">Effectuer la Réservation</button>
    </form>
  );
}

export default ReservationForm; */
