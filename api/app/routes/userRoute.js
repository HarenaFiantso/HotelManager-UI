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

/* Implémentation des endpoints */
userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.get("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
