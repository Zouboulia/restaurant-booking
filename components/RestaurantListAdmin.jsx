import RemoveRestaurant from "./RemoveRestaurant";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

// Create a function to fetch the restaurants from the server
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

// Create a component to display the list of restaurants to admins
export default async function RestaurantListAdmin() {
  const { restaurants } = await getRestaurants();
  return (
    <>
      {restaurants.map((rest) => (
        <div
          key={rest._id}
          className="p-4 border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{rest.name}</h2>
            <div>{rest.description}</div>
            <div>{rest.address}</div>
          </div>
          {
            //rest.isAdmin && ( // Only show admin options if the user is an admin
            // Pass the restaurant id as a prop to the RemoveRestaurant component to delete the restaurant
            <>
              <div className=" Admin flex gap-2">
                <RemoveRestaurant id={rest._id} />
                <Link href={`/editRestaurant/${rest._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </>
          }
        </div>
      ))}
    </>
  );
}
