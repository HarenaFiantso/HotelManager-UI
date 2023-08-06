/* Importation du paquet qui permet de gérer les routes */
import express from "express";
const userRouter = express.Router();
import {
  getUsers,
  getUsersById,
  removeUsers,
  updateUsers,
} from "../controllers/User.js";

/* Implémentation des endpoints */
userRouter.get("/", getUsers);
userRouter.get("/:id", getUsersById);
userRouter.put("/:id", updateUsers);
userRouter.delete("/:id", removeUsers);

export default hotelRouter;
