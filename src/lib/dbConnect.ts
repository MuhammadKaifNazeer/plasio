import mongoose from "mongoose";

export const dbConnect = async () => {
  if (!process.env.MONGODB_URI) {
    console.log("MONGODB_URI not defined in environment variables");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db uri: ", process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    console.log("db uri failed: ", process.env.MONGODB_URI);
  }
};
