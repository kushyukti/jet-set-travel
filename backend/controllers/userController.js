import chalk from "chalk";
import User from "../models/User.js";

// create new user

export const createUserController = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created ",
      data: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
      error: `${error}`,
    });
  }
};

//  UPDATE THE UserS
export const updateUserController = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).send({
      success: true,
      message: "Successfully updated!",
      UserDetails: req.body,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update. Try again",
      error: `${error}`,
    });
  }
};

//  DELETE THE User
export const deleteUserController = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(await req.params.id);
    res.status(201).send({
      success: true,
      message: "User Deleted!",
      data: deleteUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Try again",
      error: `${err}`,
    });
  }
};

//  GET User DETAIL BY ID
export const getUserController = async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    res.status(200).send({
      success: true,
      message: "Found User By id!",
      data: getUser,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found!",
    });
  }
  // catch(err){

  // }
};

//  GET ALL THE UserS DETAIL
export const getAllUserController = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const getAllUser = await User.find();
    // .skip(page * 8)
    // .limit(5);
    res.status(200).send({
      success: true,
      message: "All the Users...",
      data: getAllUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch all data. Try again",
      error: `${err}`,
    });
  }
};

//  GET User COUNTS
export const getUserCountsController = async (req, res) => {
  try {
    const UserCount = await User.estimatedDocumentCount();

    res.status(200).send({
      success: true,
      data: UserCount,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch!",
      error: error,
    });
  }
};
