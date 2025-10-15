import React from "react";
import { SearchIcon } from "./Icons";

interface SearchbarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar: React.FC<SearchbarProps> = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center my-6">
      <div className="relative w-2/3">
        <input
          type="text"
          placeholder="Buscar camisetas, sudaderas, gorras, colores..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-gray-300 py-3 pl-12 pr-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <SearchIcon size={20} color="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
