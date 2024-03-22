import EditRestaurantForm from "@components/EditRestaurantForm";

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
