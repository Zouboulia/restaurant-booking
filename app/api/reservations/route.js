import connectMongoDB from "@libs/mongodb";
import Reservation from "@models/reservation";
import { NextResponse } from "next/server";

// create an export async function POST to handle the POST request from the client for creating a new restaurant
export async function POST(request) {
  //destructure the name, description, and address from the request body with await request.json()
  const { restaurantID, date, time, persons, userName, phone } =
    await request.json();
  await connectMongoDB(); //await here because we are calling an async function
  await Reservation.create({
    restaurantID,
    date,
    time,
    persons,
    userName,
    phone,
  });
  return NextResponse.json({ message: "Reservation created" }, { status: 201 }); //return a JSON response with a message to the client to confirm the restaurant was created
}

// create an export async function GET to handle the GET request from the client for fetching all the reservations
export async function GET() {
  await connectMongoDB();
  const reservation = await Reservation.find();
  return NextResponse.json({ reservation });
}
