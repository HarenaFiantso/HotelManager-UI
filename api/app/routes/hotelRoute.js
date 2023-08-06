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
hotelRouter.get("/", getHotels); /* Testée */
hotelRouter.get("/find/:id", getHotel); /* Testée */
hotelRouter.get("/countByCity", countByCity); /* Testée */
hotelRouter.post("/", verifyAdmin, createHotel); /* Testée ilay createHotel */
hotelRouter.put("/:id", verifyAdmin, updateHotel); /* Testée */
hotelRouter.delete("/:id", deleteHotel); /* Testée */

export default hotelRouter;
