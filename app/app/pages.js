import React from "react";
import CalendarBooking from "@components/calendar";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-4xl font-bold text-center ">
        Welcome to the Restaurant Booking App
      </h1>
      <p className="text-lg text-center">A simple restaurant booking app</p>
      <main className="app">
        <div>
          <h1>NextJs Calendar </h1>
          <CalendarBooking onChange={onChange} value={value} />
        </div>
      </main>
    </section>
  );
};

export default Home;
