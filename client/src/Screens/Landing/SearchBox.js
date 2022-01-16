import React from "react";

const SearchBox = ({ handleSearch,searchKey,setQuery }) => {
  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          autoFocus
          value={searchKey}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form> 
    </div>
  );
};


export default SearchBox;
