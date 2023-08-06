
import Room from '../models/roomModel.js';
import Hotel from '../models/hotelModel.js';
import { createError } from '../utils/error.js';
import { pool } from '../../databaseConnection.js';

export const getRooms = async (req, res, next) => {
  try {
    const query = "SELECT * FROM room";

    const { rows } = await pool.query(query);

    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
};

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  
  try {
    const savedRoom = await newRoom.save();
    try {
      const hotel = await Hotel.findById(hotelId);
      if (!hotel) {
        throw createError(404, 'Hotel not found.');
      }

      hotel.rooms.push(savedRoom._id);
      await hotel.update();

    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { id_type, id_hotel, photo, description, unavailable_dates } = req.body;

    const query =
      "UPDATE room SET id_room_type=$1, id_hotel=$2, photo=$3, description=$4, unavailable_dates=$5 WHERE id=$6 RETURNING *";
    const values = [id_type, id_hotel, photo, description, unavailable_dates, id];

    const { rows } = await pool.query(query, values);

    if (rows.length === 0) {
      res.status(404).json({ error: "Room not found." });
    } else {
      const updatedRoom = rows[0];
      res.status(200).json(updatedRoom);
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating the room." });
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    const roomId = parseInt(req.params.id); // Convert id to integer if needed
    const room = new Room({ id: roomId });

    // Assuming req.body.dates is an array of dates you want to add to unavailable_dates
    const updatedRoom = await room.updateAvailability(req.body.dates);

    if (!updatedRoom) {
      throw createError(404, "Room not found.");
    }

    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Room.deleteById(req.params.id);

    const hotel = await Hotel.findById(hotelId);

    if (!hotel) {
      throw createError(404, 'Hotel not found.');
    }

    hotel.rooms = hotel.rooms.filter(room => room.toString() !== req.params.id);
    await hotel.update();

    res.status(200).json('Room has been deleted.');
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      throw createError(404, 'Room not found.');
    }

    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

