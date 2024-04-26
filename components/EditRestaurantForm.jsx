"use client"; //Adding use client as this component will have a lot of client interaction
import { useState } from "react";
import { useRouter } from "next/navigation";

//Create a function to handle the form submission to update the restaurant details
export default function EditRestaurantForm({ id, name, description, address }) {
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newAddress, setNewAddress] = useState(address);

  //Create a router object to use the router functionalities to navigate between pages
  const router = useRouter();

  //Create a function to update the restaurant details
  const updateRestaurant = async (e) => {
    e.preventDefault(); //Prevent the default form submission in order to use fetch

    //Ask the user to confirm if they want to update the restaurant
    const confirmUpdate = confirm(
      "Are you sure you want to update this restaurant?"
    );

    //If the user confirms the update, send a PUT request to the server with the new restaurant details
    if (confirmUpdate) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/restaurants/${id}`, //id here is the id of the restaurant that we want to update and is passed as a prop
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
        router.refresh(); //Refresh the page to see the updated restaurant details
        router.push("/showRestaurantsAdmin"); //Navigate to the showRestaurantsAdmin page
        router.refresh();
      } catch (error) {
        console.log("Error while updating restaurant : ", error);
      }
    }
  };

  //this is the form that will be displayed to the user to update the restaurant details
  return (
    <form onSubmit={updateRestaurant} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName} //set the value of the input field to the new name
        className="border border-slate-600 px-8 py-2"
        type="text"
        placeholder="Restaurant name"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription} //set the value of the input field to the new description
        className="border boder-slate-600 px-8 py-2"
        type="text"
        placeholder="Restaurant description"
      />
      <input
        onChange={(e) => setNewAddress(e.target.value)}
        value={newAddress} //set the value of the input field to the new address
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
