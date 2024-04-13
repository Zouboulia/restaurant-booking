import mongoose, { Schema } from "mongoose";

const restaurantSchema = new Schema(
  {
    restaurantID: String,
    name: String,
    description: String,
    address: String,
  },
  { timestamps: true }
);
const Restaurant =
  mongoose.models?.Restaurant || mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
