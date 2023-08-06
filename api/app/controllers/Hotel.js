import Hotel from "../models/hotelModel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found." });
    }

    hotel.name = req.body.name;
    hotel.address = req.body.address;
    hotel.is_active = req.body.is_active;
    hotel.id_city = req.body.id_city;

    const updatedHotel = await hotel.update();

    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
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

export const getHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.findByCheapestPrice(min, max);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map(async (city) => {
        const hotelsCount = await Hotel.countByCity(city);
        return { city, count: hotelsCount };
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
