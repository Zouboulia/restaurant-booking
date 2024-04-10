//import { useLocation } from "react-router-dom";
//import { useRouter } from "next/router";
"use client";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RestaurantList = () => {
  const router = useRouter();
  const [cuisine, setCuisine] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [persons, setPersons] = useState("");

  //useEffect here will run in order to set the state of the search fields if the query params are present
  useEffect(() => {
    if (router.query) {
      const {
        cuisine: queryCuisine,
        startDate,
        persons: queryPersons,
      } = router.query;
      setCuisine(queryCuisine || "");
      setSelectedDate(startDate ? new Date(startDate) : new Date());
      setPersons(queryPersons || "");
    }
  }, [router.query]);

  //Function to handle the date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSearch = () => {
    //need to implement search functionality in the RestaurantList component/opage too
    console.log("Search button clicked");
  };

  return (
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle"> List title</h1>
          <div className="lsItem">
            <label>Cuisine Type</label>
            {/*input field for cuisine type*/}
            <input
              placeholder="Cuisine type"
              type="text"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)} // Set cuisine state on input change
            />
          </div>
          <div className="lsItem">
            {/*set the date picker to open when the span is clicked by user - might actually delete this feature later*/}
            <label>Reservation date: </label>
            <span onClick={() => setOpenDatePicker(!openDatePicker)}>
              {format(selectedDate, "MM/dd/yyyy")}
            </span>
            {openDatePicker && (
              <DatePicker
                selected={selectedDate} // Set selected date to the state value
                onChange={handleDateChange} // Set the date change function
                dateFormat="MM/dd/yyyy" // Set date format
                showMonthDropdown // Show month dropdown
                showYearDropdown // Show year dropdown
                dropdownMode="select" // Set dropdown mode to select
              />
            )}
          </div>
          <div className="lsItem">
            <label>Persons: </label>
            <span>{persons}</span>
          </div>
          <button className="searchBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
