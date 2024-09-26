import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  try {
    const dbUrl = process.env.MONGO_URL as string;
    await mongoose.connect(dbUrl);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error((error as Error).message);
    process.exit(1); // Exit process with failure.
  }
};
export default connectDB;
