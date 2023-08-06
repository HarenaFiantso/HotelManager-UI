/* Importation du paquet qui permet de gérer les routes */
import express from "express";
const userRouter = express.Router();
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/User.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

/* Implémentation des endpoints */
userRouter.get("/", getUsers); /* Testée */
userRouter.get("/:id", verifyUser, getUser); /* Testée */
userRouter.put("/:id", verifyUser, updateUser); /* Testée */
userRouter.delete("/:id", deleteUser); /* Testée */

export default userRouter;
