import React, { useEffect, useRef } from "react";

import { useCocktailContext } from "./CocktailContext";
const SearchBar = () => {
  const { setSearchValue } = useCocktailContext();
  const searchValueTemp = useRef("");

  const handleOnChange = () => {
    setSearchValue(searchValueTemp.current.value);
  };

  useEffect(() => {
    searchValueTemp.current.focus();
  });

  return (
    <div className="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control"
          placeholder="Search cocktail"
          type="text"
          id="name"
          ref={searchValueTemp}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
