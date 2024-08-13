import React from "react";
import style from "./SearchBar.module.css"

const SearchBar = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [location, setLocation] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Placeholder for API call logic
  //   console.log("Search submitted:", searchTerm, location);
  // };

  return (
    <div className={style.search}>
      <div className={style.sortingoptions}>
        <button>
          Best<br></br>Match
        </button>
        <button>
          Highest<br></br>Rated
        </button>
        <button>
          Most<br></br> Reviewed
        </button>
        <div className={style.line}></div>
      </div>
      <form>
        {/* onSubmit={handleSubmit} */}
        <input
          type="text"
          placeholder="Search for businesses"
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          // value={location}
          // onChange={(e) => setLocation(e.target.value)}
        />
        {/* <div> */}
          <input  className={style.submit} type="submit" value="Let's Go" />
        {/* </div> */}
      </form>
      {/* Placeholder for sorting options */}
    </div>
  );
};

export default SearchBar;
