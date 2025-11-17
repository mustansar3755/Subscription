import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB Connection Successfull !");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/subscription`);
  } catch (error) {
    console.log("Error making connection with DB", error);
  }
};
export default connectDB