import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };
  return (
    <div className="w-full flex items-center bg-transparent border border-gray-200 rounded-full px-4 py-3">
      <GoSearch size={20} color="gray" />
      <input
        placeholder="Search the components..."
        value={query}
        onChange={handleChange}
        className="flex-1 ml-2 text-base border-none outline-none bg-transparent "
      />
    </div>
  );
};

export default SearchBar;
