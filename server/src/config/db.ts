import mongoose from "mongoose";

export const connectDB = async () => {

  try {

    await mongoose.connect("mongodb://127.0.0.1:27017/vedaai");

    console.log("MongoDB Connected");

  } catch (error) {

    console.log("MongoDB Connection Failed");

    process.exit(1);
  }
};