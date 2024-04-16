import User from "@models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  // try {
  const { name, email, password } = await req.json();

  //Confirm data exists
  if (!email || !password || !name) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  // check for duplicate emails
  const duplicate = await User.findOne({ email }).lean().exec();

  if (duplicate) {
    return NextResponse.json({ message: "Duplicate Email" }, { status: 409 });
  }

  // const hashPassword = await bcrypt.hash(userData.password, 10);
  // userData.password = hashPassword;

  console.warn("nlkjljmlk.");
  await User.create({ name, email, password });
  console.warn("User Created.");

  return NextResponse.json({ message: "User Created." }, { status: 201 });
  // } catch (error) {
  //   console.log(error);
  //   return NextResponse.json({ message: "Error", error }, { status: 500 });
  // }
}
