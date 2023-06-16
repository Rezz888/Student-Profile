import React, { useContext } from "react";
import { searchHandlerContext, searchTermContext } from "../App";

function SearchName() {
  const term = useContext(searchTermContext);
  const searchHandler = useContext(searchHandlerContext);

  const changeHandler = (e) => {
    searchHandler(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        className="search-bar"
        placeholder="Search by name"
        value={term}
        onChange={changeHandler}
      />
    </>
  );
}

export default SearchName;
