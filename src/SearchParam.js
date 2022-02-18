import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">location</label>
        <input
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Location"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
