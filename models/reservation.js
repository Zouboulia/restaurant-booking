import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema(
  {
    //reference the Restaurant model so we can populate the restaurant information when fetching the reservation
    //the restaurant is an object id that references the restaurant model
    restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
    restaurantID: String,
    date: Date,
    time: String,
    persons: Number,
    userName: String,
    phone: String,
  },
  { timestamps: true }
);
const Reservation =
  mongoose.models.Reservation ||
  mongoose.model("Reservation", reservationSchema);

export default Reservation;
