import Tour from "../models/Tour.js";
import Review from "../models/Review.js";
import chalk from "chalk";

export const createReview = async (req, res) => {
  const tourId = req.params.id;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();
    console.log(chalk.bgBlue(tourId), "hello");

    //after creating new review now update the reviews array of the tour
    // req.params.id,
    // { $set: req.body },
    // { new: true }

    const uploadedReview = await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    console.log(chalk.bgBlue(uploadedReview));

    res.status(201).json({
      success: true,
      message: "Review submitted",
      data: uploadedReview,
    });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Failed to submit!",
      error: err,
    });
  }
};
