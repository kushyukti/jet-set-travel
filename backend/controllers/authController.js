import User from "../models/User.js";
import { hashPw, comparePw } from "../middleware/hashing.js";
import chalk from "chalk";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const pw = await hashPw(req.body.password);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: pw,
      photo: req.body.photo,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registered Successfully",
      data: newUser,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Failed To Create! Try Again!",
      error: err,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }
    const checkPw = await comparePw(req.body.password, user.password);

    if (!checkPw) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    } else {
      const token = jwt.sign(
        {
          id: user._id,
          role: user.role,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1d" }
      );
      return res
        .status(200)
        .cookie("accessToken", token, {
          httpOnly: true,
          expires: token.expiresIn,
        })
        .json({
          success: true,
          message: "Login Successful",
          data: {
            user: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            photo: user.photo,
            token: token,
            // ...rest,
          },
        });
    }
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Server Error!",
      error: err,
    });
  }
};
