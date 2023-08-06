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

roomRouter.get("/", getRooms);
roomRouter.get("/:id", getRoom);
roomRouter.post("/:hotelid", verifyAdmin, createRoom);
roomRouter.put("/availability/:id", updateRoomAvailability);
roomRouter.put("/:id", verifyAdmin, updateRoom);
roomRouter.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

export default roomRouter;
