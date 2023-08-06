/* Importation du paquet qui permet de gérer les routes */
import express from "express";
const authRouter = express.Router();
import { login, register } from "../controllers/Auth.js";

/* Implémentation des endpoints */
authRouter.post("/register", register);
authRouter.post("/login", login)

export default authRouter;
