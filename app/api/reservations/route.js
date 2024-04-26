import Reservation from "@models/reservation";
import { NextResponse } from "next/server";
import Restaurant from "@models/restaurants";

// create an export async function POST to handle the POST request from the client for creating a reservation
export async function POST(request) {
  //destructure the name, description, and address from the request body with await request.json()
  const { restaurantID, date, time, persons, userName, phone } =
    await request.json();

  const restaurant = await Restaurant.findById(restaurantID); //find the restaurant by the ID
  await Reservation.create({
    restaurantID,
    restaurant,
    date,
    time,
    persons,
    userName,
    phone,
  });
  return NextResponse.json({ message: "Reservation created" }, { status: 201 }); //return a success message
}

// create an export async function GET to handle the GET request from the client for fetching all the reservations
export async function GET() {
  const reservations = await Reservation.find().populate("restaurant");
  return NextResponse.json({ reservation: reservations });
}
