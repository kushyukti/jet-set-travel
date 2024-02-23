import mongoose from "mongoose";
import chalk from "chalk";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
    console.log(
      chalk.bgGreen(
        `MongoDB database Connected Successfully ${mongoose.connection.host}!!`
      )
    );
  } catch (error) {
    console.log(chalk.bgRed(`Database Connection failed because of ${error}`));
  }
};

export default connectDB;
