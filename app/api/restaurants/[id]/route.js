import connectMongoDB from "@libs/mongodb";
import { NextResponse } from "next/server";
import Restaurant from "@models/restaurants";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newDescription: description,
    newAddress: address,
  } = await request.json();
  await connectMongoDB();
  await Restaurant.findByIdAndUpdate(id, { name, description, address });
  return NextResponse.json({ message: "Restaurant updated" }, { status: 200 });
}

//this is to get a single restaurant from the database by its id
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const restaurant = await Restaurant.findOne({ _id: id });
  return NextResponse.json({ restaurant }, { status: 200 });
}
