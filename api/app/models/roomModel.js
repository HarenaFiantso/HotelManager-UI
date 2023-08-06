class Room {
  constructor(data) {
    this.title = data.title;
    this.price = data.price;
    this.maxPeople = data.maxPeople;
    this.desc = data.desc;
    this.roomNumbers = data.roomNumbers;
  }

  async save() {
    try {
      const query =
        "INSERT INTO room(title, price, max_people, desc, room_numbers) VALUES($1, $2, $3, $4, $5) RETURNING *";
      const values = [
        this.title,
        this.price,
        this.maxPeople,
        this.desc,
        this.roomNumbers,
      ];

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

      return rows[0];
    } catch (err) {
      throw err;
    }
  }
}

export default Room;
