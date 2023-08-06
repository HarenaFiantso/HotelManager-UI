import { pool } from "../../databaseConnection.js";

class Hotel {
  constructor(data) {
    this.name = data.name;
    this.address = data.address;
    this.is_active = data.is_active;
    this.id_city = data.id_city;
  }
  static async getHotels() {
    try {
      const query = "SELECT * FROM hotel";
      const { rows } = await pool.query(query);
      return rows;
    } catch (err) {
      throw err;
    }
  }
  static async findById(id) {
    try {
      const query = "SELECT * FROM hotel WHERE id=$1";
      const values = [id];

      const { rows } = await pool.query(query, values);

      if (rows.length === 0) {
        return null; // Return null if hotel is not found
      }

      return rows[0];
    } catch (err) {
      throw err;
    }
  }
  async save() {
    try {
      const query =
        "INSERT INTO hotel(name, address, is_active, id_city) VALUES($1, $2, $3, $4) RETURNING *";
      const values = [this.name, this.address, this.is_active, this.id_city];

      const { rows } = await pool.query(query, values);

      return rows[0];
    } catch (err) {
      throw err;
    }
  }

  async update() {
    try {
      const query =
        "UPDATE hotel SET name=$1, address=$2, is_active=$3, id_city=$4 WHERE id=$5 RETURNING *";
      const values = [
        this.name,
        this.address,
        this.is_active,
        this.id_city,
        this.id,
      ];

      const { rows } = await pool.query(query, values);
      console.log(rows)
      return rows[0];
    } catch (err) {
      throw err;
    }
  }

  static async deleteById(id) {
    try {
      const query = "DELETE FROM hotel WHERE id=$1";
      const values = [id];

      await pool.query(query, values);
    } catch (err) {
      throw err;
    }
  }

  static async countByCity(city) {
    try {
      const query = "SELECT COUNT(*) FROM hotel WHERE id_city = $1";
      const values = [city];

      const { rows } = await pool.query(query, values);

      return rows[0].count;
    } catch (err) {
      throw err;
    }
  }
}

export default Hotel;
