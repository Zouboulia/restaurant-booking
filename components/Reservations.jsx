"use client";

// Create a function to fetch the list of reservations from the server
export default async function ReservationList() {
  const getReservations = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/reservations", {
        //fetch from api endpoint
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Could not fetch reservations");
      }

      //declare a variable to store the response data in json format
      const data = await response.json();
      return data; //return the data
    } catch (error) {
      console.log("Error while fetching reservations: ", error);
      return { reservation: [] }; // return an empty array if there's an error
    }
  };

  // Fetch the list of reservations
  const { reservation } = await getReservations();

  return (
    <>
      {reservation.map((reservation) => (
        <div
          key={reservation._id}
          className="p-4 border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">Your reservation details: </h2>
            <h2 className=" text-xl">
              Reservation ID: {reservation.restaurantID}
            </h2>
            {/*Fetch the restaurant name*/}
            <h3 className=" text-xl">
              Restaurant name: {/* this adds a space*/}
              {reservation.restaurant
                ? reservation.restaurant.name
                : "Restaurant Name Not Available at time of booking"}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
}
