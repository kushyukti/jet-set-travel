import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import tourRoute from "./routes/tourRoute.js";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import bookingRoute from "./routes/bookingRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const corsOption = {
  origin: true,
  credentials: true,
};

// database connection

// mongoose.set("strictQuery", false);
connectDB();

//middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());

// routes
app.use("/api/tour", tourRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/review", reviewRoute);
app.use("/api/booking", bookingRoute);

app.listen(port, () => {
  console.log("server listening on port", port);
});
