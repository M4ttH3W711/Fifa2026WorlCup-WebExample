import React from "react";

interface FilterProps {
  filters: {
    tags: string[];
    color: string[];
    price: [number, number];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      tags: string[];
      color: string[];
      price: [number, number];
    }>
  >;
}

const FilterSidebar: React.FC<FilterProps> = ({ filters, setFilters }) => {
  const toggleColor = (color: string) => {
    setFilters((prev) => ({
      ...prev,
      color: prev.color.includes(color)
        ? prev.color.filter((c) => c !== color)
        : [...prev.color, color],
    }));
  };

  const toggleTag = (tag: string) => {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  return (
    <div style={{ background: "#2196f3", padding: "1rem", width: "250px", color: "white" }}>
      <h3>Filtros</h3>

      <h4>Colores</h4>
      {["Blanco", "Negro", "Azul", "Amarillo", "Verde", "Morado"].map((c) => (
        <label key={c} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={filters.color.includes(c)}
            onChange={() => toggleColor(c)}
          />{" "}
          {c}
        </label>
      ))}

      <h4>Tags</h4>
      {["Spring", "Smart", "Modern"].map((t) => (
        <label key={t} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={filters.tags.includes(t)}
            onChange={() => toggleTag(t)}
          />{" "}
          {t}
        </label>
      ))}
    </div>
  );
};

export default FilterSidebar;
