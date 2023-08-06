import { pool } from "../../databaseConnection.js";

class User {
  constructor(data) {
    this.username = data.username;
    this.password = data.password;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.cin = data.cin;
    this.society_name = data.society_name;
    this.number = data.number;
    this.email = data.email;
    this.secondary_number = data.secondary_number;
    this.gender = data.gender;
    this.birthdate = data.birthdate;
    this.id_role = data.id_role;
  }

  async save() {
    try {
      const query =
        'INSERT INTO "user" (username, password, first_name, last_name, cin, society_name, number, email, secondary_number, gender, birthdate, id_role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
      const values = [
        this.username,
        this.password,
        this.first_name,
        this.last_name,
        this.cin,
        this.society_name,
        this.number,
        this.email,
        this.secondary_number,
        this.gender,
        this.birthdate,
        this.id_role,
      ];

      const { rows } = await pool.query(query, values);

      return rows[0];
    } catch (err) {
      throw err;
    }
  }

  static async updateUser(id, data) {
    try {
      const query =
        'UPDATE "user" SET username=$1, password=$2, first_name=$3, last_name=$4, cin=$5, society_name=$6, number=$7, email=$8, secondary_number=$9, gender=$10, birthdate=$11, id_role=$12 WHERE id=$13 RETURNING *';
      const values = [
        data.username,
        data.password,
        data.first_name,
        data.last_name,
        data.cin,
        data.society_name,
        data.number,
        data.email,
        data.secondary_number,
        data.gender,
        data.birthdate,
        data.id_role,
        id,
      ];

      const { rows } = await pool.query(query, values);

      return rows[0];
    } catch (err) {
      throw err;
    }
  }

  static async deleteUser(id) {
    try {
      const query = 'DELETE FROM "user" WHERE id=$1';
      const values = [id];

      await pool.query(query, values);
    } catch (err) {
      throw err;
    }
  }

  static async getUserById(id) {
    try {
      const query = 'SELECT * FROM "user" WHERE id=$1';
      const values = [id];

      const { rows } = await pool.query(query, values);

      return rows[0];
    } catch (err) {
      throw err;
    }
  }

  static async getUsers() {
    try {
      const query = 'SELECT * FROM "user"';
      const { rows } = await pool.query(query);

      return rows;
    } catch (err) {
      throw err;
    }
  }

  // Autres méthodes statiques du modèle User liées à la table user si nécessaire
}

export default User;
