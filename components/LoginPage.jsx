"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submit so the request can be handled by the client

    //set the formData to a new FormData object with the current target of the event
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email"); //get the email from the form data
    const password = formData.get("password"); //get the password from the form data

    // Send a POST request to the server with the email and password from the form

    const response = await fetch("api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/"); // Redirect to the home page if the login is successful
    } else {
      // Handle errors if the login is unsuccessful
      const error = await response.json();
      console.log(error.error);
      // Show an alert with the error message to the user
      alert(
        "An error occurred. Please check your email and password.",
        error.error
      );
    }
  }

  // Display the login form with email and password fields
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        className="flex flex-col mb-4 p-2"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <input
        className="flex flex-col mb-4 p-2"
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button
        className="flex flex-col mb-4 outline outline-1 bg-slate-400 text-white py-3 px-6 w-fit rounded-md "
        type="submit"
      >
        Login
      </button>
      <Link className="flex flex-col mt-20 hover:text-red-700" href="/register">
        No account yet? Click here to Register
      </Link>
    </form>
  );
}
