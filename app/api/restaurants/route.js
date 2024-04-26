//import connectMongoDB from "@libs/mongodb";
import Restaurant from "@models/restaurants";
import { NextResponse } from "next/server";

// create an export async function POST to handle the POST request from the client for creating a new restaurant
export async function POST(request) {
  //destructure the name, description, and address from the request body with await request.json()
  const { name, description, address } = await request.json();
  //await connectMongoDB(); //await here because we are calling an async function
  await Restaurant.create({ name, description, address }); //passing parameters to the create method
  return NextResponse.json({ message: "Restaurant created" }, { status: 201 }); //return a JSON response with a message to the client to confirm the restaurant was created
}

export async function GET() {
  const restaurants = await Restaurant.find(); //find all the restaurants in the database
  return NextResponse.json({ restaurants }); //return a JSON response with the restaurants to the client
}

//this method takes the id of the restaurant to be deleted from the request body and deletes the restaurant from the database
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id"); //get the id of the restaurant to be deleted from the request URL
  //await connectMongoDB();
  await Restaurant.findByIdAndDelete(id);
  return NextResponse.json({ message: "Restaurant deleted" }, { status: 200 });
}
