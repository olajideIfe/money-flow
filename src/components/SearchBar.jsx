import React from 'react'

const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <input
      type="text"
      placeholder="Search transactions..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="
      border
      p-4
      rounded-xl
      w-full
      mb-8
      "
    />
  );
};

export default SearchBar;