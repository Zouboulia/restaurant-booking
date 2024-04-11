//import RestaurantList from "@components/RestaurantList";
import Image from "next/image";
import chefImage from "@public/chef-1417239_1920.png";
import SearchFields from "@components/SearchFields";
import Featured from "@components/Featured";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-2xl text-center font-bold text-gray-400">
          Welcome to Rest'O Bookings
        </h1>
      </div>
      {/* Flex container */}
      <div className="flex flex-col items-center">
        {/* Margin bottom for spacing between image and search fields*/}
        <div className="mb-10">
          <Image src={chefImage} alt="Chef Image" width={500} height={500} />
        </div>
      </div>
      <SearchFields />
      <div className="homeContainer">
        <Featured />
      </div>
    </>
  );
}
