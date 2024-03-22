import mongoose from "mongoose";

//this function connects to the MongoDB database
const connectMongoDB = async () => {
  try {
    //use the mongoose.connect method to connect to the MongoDB database using the MONGODB_URI environment variable
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected"); //log a message to the console to confirm the connection was successful
  } catch (error) {
    console.log(error);
  }
};

//export the connectMongoDB function
export default connectMongoDB;
