/* Importation du paquet qui permet de gérer les routes */
import express from "express";
const hotelRouter = express.Router();
import {
  countByCity,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

/* Implémentation des endpoints */
hotelRouter.get("/", getHotels);
hotelRouter.get("/countByCity", countByCity);
hotelRouter.get("/find/:id", getHotel);
hotelRouter.post("/", verifyAdmin, createHotel);
hotelRouter.put("/:id", verifyAdmin, updateHotel);
hotelRouter.delete("/:id", verifyAdmin, deleteHotel);

export default hotelRouter;
