"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSubmit(event) {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    } //if any of the fields are empty, alert the user and return
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        router.push("/#");
      } //if the response is ok, send to login page
    } catch (error) {
      console.log("Error while creating user : ", error);
    }
  }

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setName(e.target.value)}
        className="flex flex-col mb-4 p-2"
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="flex flex-col mb-4 p-2"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
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
        Register
      </button>
    </form>
  );
}
