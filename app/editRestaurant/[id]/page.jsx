import EditRestaurantForm from "@components/EditRestaurantForm";

//This function fetches the restaurant by id from the database and returns the restaurant details
const getRestaurantById = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/restaurants/${id}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Could not fetch restaurant");
    }
    return response.json();
  } catch (error) {
    console.log("Error while fetching restaurant by id : ", error);
  }
};

//This function returns the EditRestaurantForm component with the restaurant details
export default async function EditRestaurant({ params }) {
  const { id } = params;
  const { restaurant } = await getRestaurantById(id);
  const { name, description, address } = restaurant;

  return (
    <EditRestaurantForm
      id={id}
      name={name}
      description={description}
      address={address}
    />
  );
}
