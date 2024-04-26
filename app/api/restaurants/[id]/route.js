//import connectMongoDB from "@libs/mongodb";
import { NextResponse } from "next/server";
import Restaurant from "@models/restaurants";

//this is to update a restaurant in the database
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newDescription: description,
    newAddress: address,
  } = await request.json();

  // thiis function below finds the restaurant by its id and updates the name, description and address
  await Restaurant.findByIdAndUpdate(id, { name, description, address });
  return NextResponse.json({ message: "Restaurant updated" }, { status: 200 });
}

//this is to get a single restaurant from the database by its id which allows the user to view the restaurant details
export async function GET(request, { params }) {
  const { id } = params;
  const restaurant = await Restaurant.findOne({ _id: id });
  return NextResponse.json({ restaurant }, { status: 200 });
}
