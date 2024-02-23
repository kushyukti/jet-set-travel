import bcrypt from "bcryptjs";
import User from "../models/User.js";
import chalk from "chalk";

export const hashPw = async (password) => {
  // hashing password

  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(password, salt);

  return hash;
};

export const comparePw = async (password, userpw) => {
  const checkCorrectPw = await bcrypt.compare(password, userpw);
  if (!checkCorrectPw) {
    return false;
  } else {
    return true;
  }
};
