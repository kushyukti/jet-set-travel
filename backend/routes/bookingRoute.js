import express from "express";
import { verifyUser } from "../middleware/verifyToken.js";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/createBooking", verifyUser, createBooking);
router.get("/getbooking", verifyUser, getBooking);
router.get("/getAllbooking", verifyUser, getAllBooking);

export default router;
