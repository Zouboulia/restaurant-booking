import RemoveRestaurant from "./RemoveRestaurant";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

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

export default async function RestaurantList() {
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
          <div className="flex gap-2">
            <RemoveRestaurant id={rest._id} />
            <Link href={`/editRestaurant/${rest._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
