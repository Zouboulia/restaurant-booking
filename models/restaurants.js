import mongoose, { Schema } from "mongoose"; //import mongoose and Schema from mongoose

const restaurantSchema = new Schema(
  {
    //define the fields for the restaurant schema
    restaurantID: String,
    name: String,
    description: String,
    address: String,
  },
  { timestamps: true }
);

//create a new model for the restaurant schema
const Restaurant =
  mongoose.models?.Restaurant || mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
