import express from "express";
const roomRouter = express.Router();
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/Room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

roomRouter.get("/", getRooms); /* Testée */
roomRouter.get("/:id", getRoom); /* Testée */
roomRouter.post("/:hotelid", createRoom); /* Testée */
roomRouter.put("/availability/:id", updateRoomAvailability); /* Testée */
roomRouter.put("/:id", verifyAdmin, updateRoom);
roomRouter.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

export default roomRouter;
