import Image from "next/image";
import chefImage from "@public/chef-1417239_1920.png";
import RestaurantList from "@components/RestaurantList";

export default function ShowRestaurantList() {
  return (
    <div className="flex flex-col items-center">
      {/* Margin bottom for spacing between image and List of Restaurants*/}
      <div className="mb-10">
        <Image src={chefImage} alt="Chef Image" width={500} height={500} />
      </div>
      <div>
        <RestaurantList />
      </div>
    </div>
  );
}
