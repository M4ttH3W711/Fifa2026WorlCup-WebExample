"use client";
import React from "react";

interface FilterProps {
  filters: {
    tono: string[];
    color: string[];
    type: string[];
    price: [number, number];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      tono: string[];
      color: string[];
      type: string[];
      price: [number, number];
    }>
  >;
  maxPrice: number;
  priceEnabled: boolean;
  setPriceEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSidebar: React.FC<FilterProps> = ({
  filters,
  setFilters,
  maxPrice,
  priceEnabled,
  setPriceEnabled,
}) => {
  // 🔹 función que lleva arriba de la página
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const toggleColor = (color: string) => {
    setFilters((prev) => ({
      ...prev,
      color: prev.color.includes(color)
        ? prev.color.filter((c) => c !== color)
        : [...prev.color, color],
    }));
    scrollTop();
  };

  const toggleTono = (tono: string) => {
    setFilters((prev) => ({
      ...prev,
      tono: prev.tono.includes(tono)
        ? prev.tono.filter((t) => t !== tono)
        : [...prev.tono, tono],
    }));
    scrollTop();
  };

  const toggleType = (type: string) => {
    setFilters((prev) => ({
      ...prev,
      type: prev.type.includes(type)
        ? prev.type.filter((t) => t !== type)
        : [...prev.type, type],
    }));
    scrollTop();
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!priceEnabled) setPriceEnabled(true);

    setFilters((prev) => ({
      ...prev,
      price: [0, value],
    }));
    scrollTop();
  };

  const percentage = (filters.price[1] / maxPrice) * 100;

  return (
    <div
      style={{
        background: "#BFF205",
        padding: "1rem",
        width: "250px",
        color: "black",
        fontSize: "0.9rem",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        margin: "1rem",
        position: "sticky",
        top: "1rem",
        alignSelf: "flex-start",
      }}
    >
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginBottom: "0.8rem",
        }}
      >
        Filtros
      </h3>

      {/* Tipo */}
      <div style={{ marginBottom: "1rem" }}>
        <h4
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "0.3rem",
          }}
        >
          Tipo
        </h4>
        {["Camisetas", "Sudaderas", "Gorras"].map((t) => (
          <label
            key={t}
            style={{
              display: "block",
              marginBottom: "0.4rem",
              fontSize: "0.9rem",
            }}
          >
            <input
              type="checkbox"
              checked={filters.type.includes(t)}
              onChange={() => toggleType(t)}
              style={{ width: "14px", height: "14px", marginRight: "6px" }}
            />
            {t}
          </label>
        ))}
      </div>

      {/* Tono */}
      <div style={{ marginBottom: "1rem" }}>
        <h4
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "0.3rem",
          }}
        >
          Tono
        </h4>
        {["Claro", "Oscuro"].map((t) => (
          <label
            key={t}
            style={{
              display: "block",
              marginBottom: "0.4rem",
              fontSize: "0.9rem",
            }}
          >
            <input
              type="checkbox"
              checked={filters.tono.includes(t)}
              onChange={() => toggleTono(t)}
              style={{ width: "14px", height: "14px", marginRight: "6px" }}
            />
            {t}
          </label>
        ))}
      </div>

      {/* Colores */}
      <div style={{ marginBottom: "1rem" }}>
        <h4
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "0.3rem",
          }}
        >
          Colores
        </h4>
        {["Blanco", "Azul", "Amarillo", "Verde", "Morado", "Café", "Rojo"].map(
          (c) => (
            <label
              key={c}
              style={{
                display: "block",
                marginBottom: "0.4rem",
                fontSize: "0.9rem",
              }}
            >
              <input
                type="checkbox"
                checked={filters.color.includes(c)}
                onChange={() => toggleColor(c)}
                style={{ width: "14px", height: "14px", marginRight: "6px" }}
              />
              {c}
            </label>
          )
        )}
      </div>

      {/* Precio */}
      <div style={{ marginBottom: "1rem" }}>
        <h4
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "0.3rem",
          }}
        >
          Precio
        </h4>

        <input
          type="range"
          min={0}
          max={maxPrice}
          value={filters.price[1]}
          onChange={handlePriceChange}
          style={{
            width: "100%",
            appearance: "none",
            height: "6px",
            borderRadius: "6px",
            outline: "none",
            cursor: "pointer",
            opacity: priceEnabled ? 1 : 0.5,
            border: "1px solid #B00000",
            background: `linear-gradient(to right, #D91604 0%, #D91604 ${percentage}%, white ${percentage}%, white 100%)`,
          }}
        />
        <style>
          {`
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 14px;
              height: 14px;
              border-radius: 50%;
              background: #D91604;
              border: 1px solid #B00000;
              cursor: pointer;
              margin-top: -4px;
            }
            input[type="range"]::-moz-range-thumb {
              width: 14px;
              height: 14px;
              border-radius: 50%;
              background: #D91604;
              border: 1px solid #B00000;
              cursor: pointer;
            }
          `}
        </style>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem",
            paddingLeft: "4px",
          }}
        >
          <input
            type="checkbox"
            checked={priceEnabled}
            onChange={() => {
              setPriceEnabled(!priceEnabled);
              scrollTop();
            }}
            style={{ width: "12px", height: "12px", marginRight: "6px" }}
          />
          <p
            style={{
              margin: 0,
              fontSize: "0.85rem",
              fontWeight: "normal",
              color: priceEnabled ? "black" : "#666",
            }}
          >
            USD {filters.price[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
