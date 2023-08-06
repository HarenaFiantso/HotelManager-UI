/* Dans ce fichier Javascript nous allons stocker toutes les requêtes liées dans la table "user" */
export const checkCin = `SELECT * FROM "user" WHERE cin=$1`;
export const addUser = `INSERT INTO "user" (username, password, first_name, last_name, cin, society_name, number, email, secondary_number, gender, birthdate, id_role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
export const getUserByUsername = `SELECT * FROM "user" username=$1`;
export const getUser = "SELECT * FROM hotel";
export const getUserById = "SELECT * FROM hotel WHERE id=$1";
export const removeUser = "DELETE FROM hotel WHERE id=$1";
export const updateUser = "UPDATE hotel SET name=$1 WHERE id=$2";
