"use client";

export default async function ReservationList() {
  const getReservations = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/reservations", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Could not fetch reservations");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error while fetching reservations: ", error);
      return { reservation: [] }; // return an empty array if there's an error
    }
  };

  const { reservation } = await getReservations();

  return (
    <>
      {reservation.map((reservation) => (
        <div
          key={reservation._id}
          className="p-4 border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{reservation.restaurantID}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
