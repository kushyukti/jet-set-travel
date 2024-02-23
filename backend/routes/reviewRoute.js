import express from "express";
import { createReview } from "../controllers/reviewController.js";
import { verifyUser } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/createReview/:id", verifyUser, createReview);

export default router;
