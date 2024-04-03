"use client"; //Adding use client as this component will have a lot of client interaction
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditRestaurantForm({ id, name, description, address }) {
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newAddress, setNewAddress] = useState(address);

  const router = useRouter(); //this will be used to refresh the page after updating the restaurant

  const updateRestaurant = async (e) => {
    e.preventDefault(); //Prevent the default form submission in order to use fetch

    const confirmUpdate = confirm(
      "Are you sure you want to update this restaurant?"
    );

    if (confirmUpdate) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/restaurants/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              newName,
              newDescription,
              newAddress,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Could not update restaurant");
        }
        router.refresh();
        router.push("/showRestaurantsAdmin");
      } catch (error) {
        console.log("Error while updating restaurant : ", error);
      }
    }
  };

  return (
    <form onSubmit={updateRestaurant} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-600 px-8 py-2"
        type="text"
        placeholder="Restaurant name"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border boder-slate-600 px-8 py-2"
        type="text"
        placeholder="Restaurant description"
      />
      <input
        onChange={(e) => setNewAddress(e.target.value)}
        value={newAddress}
        className="border boder-slate-600 px-8 py-2"
        type="text"
        placeholder="Restaurant address"
      />
      <button
        className="outline outline-1 bg-slate-400 text-white py-3 px-6 w-fit rounded-md"
        type="submit"
      >
        Update Restaurant
      </button>
    </form>
  );
}
