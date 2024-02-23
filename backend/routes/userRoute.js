import express from "express";
import {
  createUserController,
  deleteUserController,
  getAllUserController,
  getUserController,
  getUserCountsController,
  updateUserController,
} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../middleware/verifyToken.js";

const router = express.Router();

// create new User
router.post("/createUser", createUserController);
// update new User
router.put("/updateUser/:id", verifyUser, updateUserController);
// delete new User
router.delete("/deleteUser/:id", verifyUser, deleteUserController);
// get all new User
router.get("/getAllUser", verifyUser, getAllUserController);
// get User
router.get("/getUser/:id", verifyAdmin, getUserController);
// get User Count
router.get("/getUserCount", getUserCountsController);

export default router;
