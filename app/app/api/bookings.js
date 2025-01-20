// import mongoose from "mongoose"; // Import Mongoose library

// // Connect to MongoDB database
// mongoose.connect("mongodb://localhost:27017/booking-app", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define a schema for the bookings
// const bookingSchema = new mongoose.Schema({
//   date: { type: Date, required: true },
//   time: { type: String, required: true },
// });

// // Create a model from the schema
// const Booking = mongoose.model("Booking", bookingSchema);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       // Extract date and time from request body
//       const { date, time } = req.body;

//       // Validate inputs
//       if (!date || !time) {
//         return res.status(400).json({ error: "Date and time are required" });
//       }

//       // Check availability
//       const existingBooking = await Booking.findOne({ date, time });
//       if (existingBooking) {
//         return res.status(400).json({ error: "Time slot already booked" });
//       }

//       // Create a new booking
//       const newBooking = new Booking({ date, time });
//       await newBooking.save();

//       // Return success response
//       return res
//         .status(200)
//         .json({ message: "Booking created successfully", booking: newBooking });
//     } catch (error) {
//       console.error("Error creating booking:", error);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     // Handle other HTTP methods
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }
