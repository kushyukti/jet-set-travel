import chalk from "chalk";
import Tour from "../models/Tour.js";
import ValidationError from "../errorHandling/error.js";

// create new tour

export const createTourController = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "Successfully created ",
      data: savedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
      error: `${error}`,
    });
  }
};

//  UPDATE THE TOURS
export const updateTourController = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).send({
      success: true,
      message: "Successfully updated!",
      tourDetails: req.body,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update. Try again",
      error: `${error}`,
    });
  }
};

//  DELETE THE TOUR
export const deleteTourController = async (req, res) => {
  try {
    const deleteTour = await Tour.findByIdAndDelete(await req.params.id);
    res.status(201).send({
      success: true,
      message: "Tour Deleted!",
      data: deleteTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Try again",
      error: `${err}`,
    });
  }
};

//  GET TOUR DETAIL BY ID
export const getTourController = async (req, res) => {
  try {
    const getTour = await Tour.findById(req.params.id).populate("reviews");
    res.status(200).send({
      success: true,
      message: "Tour By id!",
      data: getTour,
    });
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(500).send({
        success: false,
        message: "Validation Error",
        data: err,
      });
    } else if (err instanceof SyntaxError) {
      res.status(500).send({
        success: false,
        message: "JSON Syntax Error",
        data: err,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Not Found!",
      });
    }
    // res.status(500).json({
    //   success: false,
    //   message: "Failed to fetch. Try again",
    //   error: `${err}`,
    // });
    // res.status(404).json({
    //   success: false,
    //   message: "Not Found!",
    // });
  }
};

//  GET ALL THE TOURS DETAIL
export const getAllTourController = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const getAllTour = await Tour.find().populate("reviews");
    // .skip(page * 5)
    // .limit(5);
    res.status(200).send({
      success: true,
      message: "All the tours...",
      data: getAllTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch all data. Try again",
      error: `${err}`,
    });
  }
};

// GET TOUR BY SEARCH
export const getTourBySearchController = async (req, res) => {
  const city = new RegExp(req.query.city, "i"); // here i means case sensitive

  // const distance = new RegExp(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // get means greateer than equal
    const tours = await Tour.find({
      city,
      // distance
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).send({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Not Found!",
      error: error,
    });
  }
};

//  GET FEATURED TOUR
export const getFeaturedTourController = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true });
    // .limit(8);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Not Found!",
      error: error,
    });
  }
};

//  GET TOUR COUNTS
export const getTourCountsController = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).send({
      success: true,
      data: tourCount,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch!",
      error: error,
    });
  }
};
