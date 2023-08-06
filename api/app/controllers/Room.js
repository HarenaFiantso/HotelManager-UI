// controllers/roomController.js
import Room from '../models/roomModel.js';
import Hotel from '../models/hotelModel.js';
import { createError } from '../utils/error.js';

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

export const updateRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      throw createError(404, 'Room not found.');
    }

    room.title = req.body.title;
    room.price = req.body.price;
    room.maxPeople = req.body.maxPeople;
    room.desc = req.body.desc;

    const updatedRoom = await room.update();

    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      throw createError(404, 'Room not found.');
    }

    const roomNumber = room.roomNumbers.find(number => number._id.toString() === req.params.id);

    if (!roomNumber) {
      throw createError(404, 'Room number not found.');
    }

    roomNumber.unavailableDates.push(req.body.dates);

    await room.update();

    res.status(200).json('Room status has been updated.');
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

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
