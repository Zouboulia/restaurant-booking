"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveRestaurant({ id }) {
  //destructuring the id from the props so that we can use it directly in the component
  const router = useRouter();
  const RemoveRestaurant = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this restaurant?"
    );

    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/restaurants?id=${id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Could not delete restaurant");
        }
        //if the response is ok, refresh the page to see the changes
        if (response.ok) {
          router.refresh();
        }
      } catch (error) {
        console.log("Error while deleting restaurant : ", error);
      }
    }
  };

  return (
    <button onClick={RemoveRestaurant} className="text-red-600">
      <HiOutlineTrash size={24} />
    </button>
  );
}
