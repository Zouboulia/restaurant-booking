"use client";
import "react-datepicker/dist/react-datepicker.css";

export default async function RestaurantList() {
  const getRestaurants = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/restaurants", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Could not fetch restaurants");
      }
      return response.json();
    } catch (error) {
      console.log("Error while fetching restaurants : ", error);
    }
  };

  const makeReservation = async (restaurantID) => {
    try {
      const response = await fetch("api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ restaurantID }),
      });

      if (response.ok) {
        alert("Your Reservation was successful!");
      } else {
        alert(
          "Oh no, the reservation did not work perperly! Please try again."
        );
      }
    } catch (error) {
      alert("An error occurred while making the reservation: " + error.message);
    }
  };

  const { restaurants } = await getRestaurants();
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-screen-lg flex flex-col w-full">
        {restaurants.map((rest) => (
          <div
            key={rest._id}
            className="border-slate-300 my-3  px-10 flex justify-between items-center"
          >
            <h2 className="font-bold text-2xl">{rest.name}</h2>
            <button
              className="outline outline-1 bg-slate-400 text-white py-3  rounded-md"
              onClick={() => makeReservation(rest._id)}
              style={{ minWidth: "180px" }}
            >
              Make Reservation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
