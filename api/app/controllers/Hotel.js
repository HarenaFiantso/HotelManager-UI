import Hotel from "../models/hotelModel.js";
import { pool } from "../../databaseConnection.js";

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.getHotels();
    res.status(200).json(hotels);
    console.log("Getting Hotel successfully.");
  } catch (err) {
    next(err);
  }
};

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, address, is_active, id_city } = req.body;
  pool.query(
    "UPDATE hotel SET name=$1, address=$2, is_active=$3, id_city=$4 WHERE id=$5 RETURNING *",
    [name, address, is_active, id_city, id],
    (error, result) => {
      if (error) {
        res
          .status(500)
          .json({ error: "An error occured while updating the hotel." });
      } else {
        res.status(200).send("Updated successfully.");
      }
    }
  );
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.deleteById(req.params.id);
    res.status(200).json({ message: "Hotel has been deleted." });
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found." });
    }

    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  try {
    const cities = req.query.cities;
    if (!cities) {
      return res.status(400).json({ message: "Cities parameter is missing." });
    }

    const citiesArray = cities.split(",");

    const list = await Promise.all(
      citiesArray.map(async (city) => {
        const hotelsCount = await Hotel.countByCity(city);
        return { city, count: hotelsCount };
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
