"use client"; //making this a client-side component
import { useState } from "react"; //import the useState hook from React
import { useRouter } from "next/navigation";

//create a function to handle the form submission to add a new restaurant
export default function AddRestaurant() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  //write function to handle submission of the form
  async function handleSubmission(e) {
    e.preventDefault();

    if (!name || !description || !address) {
      alert("Please fill in all fields");
      return;
    } //if any of the fields are empty, alert the user and return
    try {
      const response = await fetch("/api/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, address }),
      });
      if (response.ok) {
        setName("");
        setDescription("");
        setAddress("");
      } //if the response is ok, reset the form fields
    } catch (error) {
      console.log("Error while adding restaurant : ", error);
    }
  }

  // Function to handle cancel action
  function handleCancel(e) {
    // Prevent the default form submit so the request can be handled by the client and submission does not happen
    e.preventDefault();
    router.push("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmission} className="flex flex-col gap-3">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border boder-slate-600 px-8 py-2"
          type="text"
          placeholder="Restaurant name"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border boder-slate-600 px-8 py-2"
          type="text"
          placeholder="Restaurant description"
        />
        <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          className="border boder-slate-600 px-8 py-2"
          type="text"
          placeholder="Restaurant address"
        />
        <div className="flex gap-3">
          <button
            className="outline outline-1 bg-slate-400 text-white py-3 px-6 w-fit rounded-md"
            type="submit"
          >
            Add Restaurant
          </button>
          <button
            className="outline outline-1 bg-red-300 text-white py-3 px-6 w-fit rounded-md"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
