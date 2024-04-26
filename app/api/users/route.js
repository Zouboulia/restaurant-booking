import User from "@models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; //import bcrypt for password hashing

export async function POST(req) {
  try {
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

    //hashing the password before storing it
    const hashPassword = await bcrypt.hash(password, 10); //10 is the salt rounds (how many times the password is hashed)

    //create a new user with the hashed password
    await User.create({ name, email, password: hashPassword });
    console.warn("User Created."); //log the user creation

    return NextResponse.json({ message: "User Created." }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
