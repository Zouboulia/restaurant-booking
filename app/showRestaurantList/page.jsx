import Image from "next/image";
import chefImage from "@public/chef-1417239_1920.png";
import RestaurantList from "@components/RestaurantList";

export default function ShowRestaurantList() {
  return (
    <div className="flex flex-col ">
      {/* Margin bottom for spacing between image and List of Restaurants*/}
      <div className="mb-10 flex flex-col items-center">
        <Image src={chefImage} alt="Chef Image" width={500} height={500} />
      </div>
      <div className="w-full max-w-80">
        <RestaurantList />
      </div>
    </div>
  );
}
