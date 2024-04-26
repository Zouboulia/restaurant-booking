"use client";

import { signIn } from "@app/../auth";
import User from "@models/users";
import { NextResponse } from "next/server";
export { GET } from "@/auth";
import bcrypt from "bcrypt"; //import bcrypt for password hashing

//create a new POST function to handle the login request from the client
export async function POST(req) {
  try {
    const { email, password } = await req.json();
    // Check if user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
    // Verify password with bcrypt
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
    // If credentials are valid, sign in user
    await signIn("credentials", { email, password });

    // Send role along with the success response
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occured during login" },
      { status: 500 }
    );
  }
}
