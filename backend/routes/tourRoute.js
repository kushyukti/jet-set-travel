import express from "express";
import {
  createTourController,
  deleteTourController,
  getAllTourController,
  getFeaturedTourController,
  getTourBySearchController,
  getTourController,
  getTourCountsController,
  updateTourController,
} from "../controllers/toursController.js";
import { verifyAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

// create new tour
router.post("/createTour", verifyAdmin, createTourController);
// update new tour
router.put("/updateTour/:id", verifyAdmin, updateTourController);
// delete new tour
router.delete("/deleteTour/:id", verifyAdmin, deleteTourController);
// get all new tour
router.get("/getAllTour", getAllTourController);
// get tour
router.get("/getTour/:id", getTourController);

// get tour by search
router.get("/getTourBySearch", getTourBySearchController);

//get featured tour
router.get("/getFeaturedTour", getFeaturedTourController);

//get tour count
router.get("/getTourCount", getTourCountsController);
export default router;
