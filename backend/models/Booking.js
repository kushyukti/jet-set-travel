import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Tour",
  },
  userId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
  },
  fullName: {
    type: String,
    required: true,
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
    required: true,
  },
  tourName: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Booking", bookingSchema);
