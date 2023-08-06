import { pool } from "../../databaseConnection.js";

class Room {
  constructor(data) {
    this.id = data.id;
    this.id_room_type = data.id_room_type;
    this.id_hotel = data.id_hotel;
  }

  async save() {
    try {
      const query =
        "INSERT INTO room(id_room_type, id_hotel) VALUES($1, $2) RETURNING *";
      const values = [this.id_room_type, this.id_hotel];

      const { rows } = await pool.query(query, values);

      return rows[0];
    } catch (err) {
      throw err;
    }
  }

  static async findById(id) {
    try {
      const query = "SELECT * FROM room WHERE id=$1";
      const values = [id];
  
      const { rows } = await pool.query(query, values);
  
      if (rows.length === 0) {
        return null; // Return null if room is not found
      }
  
      /* // Assuming roomNumbers is an array of objects representing room numbers
      const roomNumbersQuery = "SELECT * FROM room_numbers WHERE room_id=$1";
      const roomNumberValues = [id];
      const roomNumbersResult = await pool.query(roomNumbersQuery, roomNumberValues);
      rows[0].roomNumbers = roomNumbersResult.rows; */
  
      return rows[0];
    } catch (err) {
      throw err;
    }
  }

  async updateAvailability(dates) {
    try {
      const query = `
        UPDATE room
        SET unavailable_dates = array_cat(unavailable_dates, $1::date[])
        WHERE id = $2
        RETURNING *;
      `;
      const values = [dates, this.id];

      const { rows } = await pool.query(query, values);

      return rows[0];
    } catch (err) {
      throw err;
    }
  }
  
}

export default Room;
