import React from "react";

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
        {/* Ícono lupa en SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </div>
    </div>
  );
};

export default Searchbar;
