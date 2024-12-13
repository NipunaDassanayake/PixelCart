import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionString = process.env.MONGO_URI;
    if (!connectionString) {
      throw new Error("Please add the connection String");
    }
    await mongoose.connect(connectionString);

    console.log("DB connection scuccessful !");
  } catch (error) {
    console.log("DB connection fail");
    console.log(error);
  }
};
