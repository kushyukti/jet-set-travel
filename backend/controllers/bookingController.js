import Booking from "../models/Booking.js";

// POST NEW BOOKING
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    console.log(req.body);
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Booked!",
      data: savedBooking,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Not Booked! Please try again!",
      error: err,
    });
  }
};

// GET BOOKING BY ID
export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const booked = await Booking.findById(id);

    res.status(200).json({
      success: true,
      message: "successful",
      data: booked,
    });
  } catch (err) {
    res.status(404).send({
      success: false,
      message: "No Data Found!",
    });
  }
};

// GET all BOOKING
export const getAllBooking = async (req, res) => {
  try {
    const booked = await Booking.find();

    res.status(200).json({
      success: true,
      message: "successful!",
      data: booked,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
