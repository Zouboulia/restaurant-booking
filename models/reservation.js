import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema(
  {
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
