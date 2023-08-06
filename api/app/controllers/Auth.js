/* Importation de la base de donnée et des requêtes */
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "http-errors";
import { pool } from "../../databaseConnection.js";
import { addUser, checkCin, getUserByUsername } from "../models/userModel.js";

/* 1ere requête : Enregistrer un utilisateur */
export const register = (req, res) => {
  const {
    username,
    password,
    first_name,
    last_name,
    cin,
    society_name,
    number,
    email,
    secondary_number,
    gender,
    birthdate,
    id_role,
  } = req.body;
  bcrypt.hash(password, 10, (error, hashedPassword) => {
    if (error) {
      throw error;
    }

    /* Regarder si le cin est déjà pris dans la base de donnée */
    pool.query(checkCin, [cin], (error, result) => {
      if (error) {
        throw error;
      }

      if (result.rows.length > 0) {
        res
          .status(409)
          .send(
            "User with the provider CIN already exists or the following syntax is wrong."
          );
      } else {
        pool.query(
          addUser,
          [
            username,
            hashedPassword, // Utilisation du mot de passe hacher au lieu de l'original
            first_name,
            last_name,
            cin,
            society_name,
            number,
            email,
            secondary_number,
            gender,
            birthdate,
            id_role,
          ],
          (error, result) => {
            if (error) {
              throw error;
            }
            res.status(201).send("User added.");
          }
        );
      }
    });
  });
};

/* 2e requête : Authentifier l'utilisateur */
export const login = (req, res, next) => {
  const { username, password } = req.body;
  pool.query(getUserByUsername, [username], (error, result) => {
    if (error) next(error);
    if (result.rows.length === 0) res.status(404).send("User not found.");

    /* Faire la comparaison du mot de passe fourni par l'utilisateur par celui qui est stocké dans la base de donnée */
    const user = result.rows[0];
    try {
      const isPasswordCorrect = bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return next(createError(400, "Wrong password or username ! "));
      }
    } catch (error) {
      next(error);
    }
  });
};
