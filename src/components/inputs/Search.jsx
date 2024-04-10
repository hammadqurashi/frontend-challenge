import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { parse, build, omit, keep } from "search-params";
import { useNavigate } from "react-router-dom";

const Search = ({ filters }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = build({ ...filters, searchIn: query });
    navigate(`/?${searchParams}`);
  };
  return (
    <form
      className="w-max flex items-center gap-2 p-2 border border-gray-300 focus:border-400 rounded-md"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        className="outline-none"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <IoIosSearch className="text-lg" />
      </button>
    </form>
  );
};

export default Search;
