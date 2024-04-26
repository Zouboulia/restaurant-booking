"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faBurger, faPerson } from "@fortawesome/free-solid-svg-icons";
import "./../app/globals.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

//importing date picker from react-datepicker and css
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { format } from "date-fns";

export default function SearchFields() {
  //Creating a state for controlling the date picker
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [cuisine, setCuisine] = useState("");

  const [openTable, setOpenTable] = useState(false);
  const [persons, setPersons] = useState({ persons: 1 });

  const router = useRouter();

  //Function to handle the persons counter
  const handlePersons = (operation) => {
    setPersons((prevPersons) => {
      //if the count is 1 and decrease is clicked, don't update the state as the count can't be less than 1 person
      if (operation === "decrease" && prevPersons.persons === 1) {
        return prevPersons;
      }
      return {
        persons:
          operation === "increase"
            ? prevPersons.persons + 1
            : prevPersons.persons - 1,
      };
    });
  };

  //Function to handle the search button
  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      cuisine,
      startDate: startDate.toISOString(), // Convert date to ISO string for compatibility so it can be passed as a query param
      persons,
    }).toString();
    router.push(`/showRestaurantList?${queryParams}`);
  };

  return (
    <div className="SearchFields ">
      <div className="SearchItem">
        <FontAwesomeIcon className="searchIcons" icon={faBurger} />
        <input
          type="text"
          className="inputField"
          placeholder="Cuisine type"
          onClick={() => setCuisine(cuisine)}
        />
      </div>
      <div className="SearchItem">
        <FontAwesomeIcon className="searchIcons" icon={faCalendarDays} />
        <span
          onClick={() => setOpenDatePicker(!openDatePicker)}
          className="searchText"
        >
          {`${format(startDate, "MM/dd/yyyy hh:mm aa")}`}
        </span>
        {/* Date Picker set to openDate true */}
        {openDatePicker && (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30} // This sets an interval between each time option available to users (in minutes)
            dateFormat="MM/dd/yyyy HH:mm" // Updated the format to include both date and time
            className="date"
          />
        )}
      </div>
      <div className="SearchItem">
        <FontAwesomeIcon className="searchIcons" icon={faPerson} />
        <span onClick={() => setOpenTable(!openTable)} className="searchText">
          {`${persons.persons} Persons`}
        </span>
        {openTable && (
          <div className="table">
            <div className="tableItem">
              <span className="tableText"> Persons</span>
              <div className="personsCounter">
                <button
                  onClick={() => handlePersons("decrease")} // Decrease the number of persons if - button is clicked
                  className="personsCounterBtn"
                >
                  -
                </button>
                <span className="personsCounterNumber">
                  {" "}
                  {persons.persons}{" "}
                </span>
                <button
                  onClick={() => handlePersons("increase")} // Increase the number of persons if + button is clicked
                  className="personsCounterBtn"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="SearchItem">
        <button className="searchBtn" onClick={handleSearch}>
          {" "}
          {/*call the handleSearch function on button click*/}
          Search
        </button>
      </div>
    </div>
  );
}
