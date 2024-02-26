import mongoose from "mongoose";
import moment from "moment-timezone";

const bookingSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Tour",
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  userEmail: {
    type: String,
  },
  fullName: {
    type: String,
  },
  guestSize: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  bookAt: {
    type: Date,
    default: () => moment().tz("Asia/Kolkata").format(), // Set default value to current date
  },
  tourName: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Booking", bookingSchema);
