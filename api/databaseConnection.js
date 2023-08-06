/* Importation du paquet postgresql et de la variable d'environnement */
import pkg from "pg";
import { config } from "dotenv";
config();

/* Initialisation de la connection avec la base de donnée Postgresql */
const { Pool } = pkg;
export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

/* Confirmer la connection avec la base de donnée en donnant des messages dans la console */
export const connect = async () => {
  try {
    await pool.connect();
    console.log("Connected to PostgreSQL.");
  } catch (error) {
    throw error;
  }
};
