import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI as string);
    console.log("Connected to DB");
  } catch (err) {
    if (err instanceof Error) {
      return console.log("Connection Failed", err.message);
    } else {
      return console.log(err);
    }
  }
};

export default connectDB;
