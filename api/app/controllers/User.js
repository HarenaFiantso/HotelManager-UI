/* Importation de la base de donnée et des requête */
import { pool } from "../../databaseConnection.js";
import {
  getUser,
  getUserById,
  removeUser,
  updateUser,
} from "../models/userModel.js";

/* 1ere requête : Afficher tous les Users (Testée) */
export const getUsers = (req, res) => {
  pool.query(getUser, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

/* 2e requête : Afficher un User avec un id spécifié (Testée) */
export const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getUserById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

/* 3e requête : Supprimer un User (Testée) */
export const removeUsers = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(removeUser, [id], (error, result) => {
    if (error) throw error;
    res.status(200).send("User remove successfully.");
  });
};

/* 4e requête : Mettre à jour un User (Testée) */
export const updateUsers = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(updateUser, [name, id], (error, result) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occured while updating the User." });
    } else {
      res.status(200).send("Updated successfully.");
    }
  });
};
