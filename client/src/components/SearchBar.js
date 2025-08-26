import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2 justify-center">
      <input
        type="text"
        placeholder="Search blogs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-3 py-2 border rounded w-64"
      />
      <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded font-bold">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
