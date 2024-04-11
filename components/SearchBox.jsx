export default function SearchBox() {
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
}
