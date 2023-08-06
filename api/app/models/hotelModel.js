class Hotel {
  constructor(data) {
    this.name = data.name;
    this.address = data.address;
    this.is_active = data.is_active;
    this.id_city = data.id_city;
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

  static async findById(id) {
    try {
      const query = "SELECT * FROM hotel WHERE id=$1";
      const values = [id];

      const { rows } = await pool.query(query, values);

      return rows[0];
    } catch (err) {
      throw err;
    }
  }

  static async findByCheapestPrice(min, max) {
    try {
      const query =
        "SELECT * FROM hotel WHERE cheapest_price > $1 AND cheapest_price < $2";
      const values = [min || 1, max || 999];

      const { rows } = await pool.query(query, values);

      return rows;
    } catch (err) {
      throw err;
    }
  }
}

export default Hotel;
