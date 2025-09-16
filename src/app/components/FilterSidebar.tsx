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
  const toggleColor = (color: string) => {
    setFilters((prev) => ({
      ...prev,
      color: prev.color.includes(color)
        ? prev.color.filter((c) => c !== color)
        : [...prev.color, color],
    }));
  };

  const toggleTono = (tono: string) => {
    setFilters((prev) => ({
      ...prev,
      tono: prev.tono.includes(tono)
        ? prev.tono.filter((t) => t !== tono)
        : [...prev.tono, tono],
    }));
  };

  const toggleType = (type: string) => {
    setFilters((prev) => ({
      ...prev,
      type: prev.type.includes(type)
        ? prev.type.filter((t) => t !== type)
        : [...prev.type, type],
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!priceEnabled) setPriceEnabled(true);

    setFilters((prev) => ({
      ...prev,
      price: [0, value],
    }));
  };

  const percentage = (filters.price[1] / maxPrice) * 100;

  return (
    <div
      style={{
        background: "#BFF205",
        padding: "1.5rem",
        width: "320px",
        color: "black",
        fontSize: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        margin: "1rem",
      }}
    >
      <h3 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Filtros
      </h3>

      {/* Tipo - NUEVO: va primero */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h4 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
          Tipo
        </h4>
        {["Camisetas", "Sudaderas", "Gorras"].map((t) => (
          <label
            key={t}
            style={{ display: "block", marginBottom: "0.6rem", fontSize: "1.5rem" }}
          >
            <input
              type="checkbox"
              checked={filters.type.includes(t)}
              onChange={() => toggleType(t)}
              style={{ width: "22px", height: "22px", marginRight: "10px" }}
            />
            {t}
          </label>
        ))}
      </div>

      {/* Tono */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h4 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
          Tono
        </h4>
        {["Claro", "Oscuro"].map((t) => (
          <label
            key={t}
            style={{ display: "block", marginBottom: "0.6rem", fontSize: "1.5rem" }}
          >
            <input
              type="checkbox"
              checked={filters.tono.includes(t)}
              onChange={() => toggleTono(t)}
              style={{ width: "22px", height: "22px", marginRight: "10px" }}
            />
            {t}
          </label>
        ))}
      </div>

      {/* Colores */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h4 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
          Colores
        </h4>
        {["Blanco", "Azul", "Amarillo", "Verde", "Morado", "Café", "Rojo"].map((c) => (
          <label
            key={c}
            style={{ display: "block", marginBottom: "0.6rem", fontSize: "1.5rem" }}
          >
            <input
              type="checkbox"
              checked={filters.color.includes(c)}
              onChange={() => toggleColor(c)}
              style={{ width: "22px", height: "22px", marginRight: "10px" }}
            />
            {c}
          </label>
        ))}
      </div>

      {/* Barra de precios */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h4 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.8rem" }}>
          Precio máximo
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
            height: "12px",
            borderRadius: "6px",
            outline: "none",
            cursor: "pointer",
            opacity: priceEnabled ? 1 : 0.5,
            border: "2px solid #B00000",
            background: `linear-gradient(to right, #D91604 0%, #D91604 ${percentage}%, white ${percentage}%, white 100%)`,
          }}
        />
        <style>
          {`
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: #D91604;
              border: 2px solid #B00000;
              cursor: pointer;
              margin-top: -6px; /* centra la bola */
            }
            input[type="range"]::-moz-range-thumb {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: #D91604;
              border: 2px solid #B00000;
              cursor: pointer;
            }
            input[type="range"]::-ms-thumb {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: #D91604;
              border: 2px solid #B00000;
              cursor: pointer;
            }
          `}
        </style>

        {/* Indicador con casilla */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "0.8rem", paddingLeft: "12px" }}>
          <input
            type="checkbox"
            checked={priceEnabled}
            onChange={() => setPriceEnabled(!priceEnabled)}
            style={{ width: "16px", height: "16px", marginRight: "10px" }}
          />
          <p style={{ margin: 0, fontSize: "1.2rem", fontWeight: "normal", color: priceEnabled ? "black" : "#666" }}>
            USD {filters.price[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
