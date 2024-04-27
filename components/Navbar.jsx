"use client"; //Adding use client because this component will be a client side component
import { useState } from "react"; //import the useState hook from React for the toggleMenu state on small screens
import Image from "next/image"; //import image component so I can use the logo
import Link from "next/link"; //import link component to link to different pages
import { getServerSession } from "next-auth";
//import { options } from "../api/auth/[...nextauth]/options";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //create a useState hook to toggle the menu on small screens
  //the useState hook was added by the developer and was not present in he initial code snippet that was used to create the navbar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //const session = getServerSession(options);

  //This is the navbar component that will be displayed on the top of the page, it contains the logo, app name and the navigation links
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/#"
          className="flex items-center space-x-3 rtl:space-x-reverse mb-5"
        >
          {/* Logo */}
          <Image
            src="/restaurant.png"
            alt="Restaurant Logo"
            width={40}
            height={80}
            className="h-8"
          />
          {/* App Name */}
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white mb-5">
            Rest'O Bookings
          </span>
        </a>

        {/* Toggle Button for Mobiles and small screens */}
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/#"
                className="block py-2 px-3 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/showRestaurantsAdmin"
                className="block py-2 px-3 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Edit Restaurants
              </a>
            </li>
            <li>
              <a
                href="/showRestaurantList"
                className="block py-2 px-3 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Restaurants
              </a>
            </li>
            <li>
              <a
                href="/showReservationList"
                className="block py-2 px-3 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Reservations
              </a>
            </li>
            <li className="hidden md:block">
              <a
                href="/addRestaurant"
                className="block py-2 px-3 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Add Restaurant
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="block py-2 px-3 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Login/Register
              </a>
            </li>

            {/* {session ? (
              <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
            ) : (
              <Link href="/api/auth/signin">Login</Link>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
