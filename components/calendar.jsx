"use client"; //have to remove later

import React, { useState } from "react";
import Calendar from "react-calendar";

const CalendarBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // Here you can fetch available times for the selected date from your backend or any other data source
    // For demonstration, I'm just setting some sample available times
    setAvailableTimes([
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
    ]);
  };

  return (
    <div>
      <Calendar
        minDate={new Date()}
        className="REACT-CALENDAR p-2"
        onClickDay={handleDateClick}
      />
      {selectedDate && (
        <div>
          <h2>Available Times for {selectedDate.toLocaleString()}</h2>
          <ul>
            {availableTimes.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalendarBooking;
