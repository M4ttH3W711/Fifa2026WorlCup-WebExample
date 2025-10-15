"use client";
import React, { useState } from "react";

// 🔹 Definición central del tipo de filtros
export interface Filters {
  tamaño: string[];
  color: string[];
  type: string[];
  price: [number, number];
}

interface FilterProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  maxPrice: number;
  minPrice: number;
  priceEnabled: boolean;
  setPriceEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSidebar: React.FC<FilterProps> = ({
  filters,
  setFilters,
  maxPrice,
  minPrice,
  priceEnabled,
  setPriceEnabled,
}) => {
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

  const toggleTamaño = (tamaño: string) => {
    setFilters((prev) => ({
      ...prev,
      tamaño: prev.tamaño.includes(tamaño)
        ? prev.tamaño.filter((t) => t !== tamaño)
        : [...prev.tamaño, tamaño],
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
      price: [minPrice, value],
    }));
    scrollTop();
  };

  const percentage = ((filters.price[1] - minPrice) / (maxPrice - minPrice)) * 100;

  // 🔹 Estados para desplegables (cerrados por defecto)
  const [openType, setOpenType] = useState(false);
  const [openTamaño, setOpenTamaño] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);

  const titleStyle: React.CSSProperties = {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "0.3rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    userSelect: "none", // 🔹 Evitar selección/subrayado
    textDecoration: "none",
  };

  const triangleStyle = (isOpen: boolean) => ({
    display: "inline-block",
    marginLeft: "0.5rem",
    transition: "transform 0.3s ease",
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
  });

  const countBubbleStyle: React.CSSProperties = {
    background: "red",
    color: "white",
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "0.75rem",
    marginLeft: "6px",
  };

  const activeCount = (category: string) => {
    switch (category) {
      case "type":
        return filters.type.length;
      case "tamaño":
        return filters.tamaño.length;
      case "color":
        return filters.color.length;
      case "price":
        return priceEnabled ? 1 : 0;
      default:
        return 0;
    }
  };

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
          textAlign: "center", // 🔹 Centrado
          userSelect: "none",
        }}
      >
        Filtros
      </h3>

      {/* Tipo */}
      <div style={{ marginBottom: "1rem" }}>
        <h4 style={titleStyle} onClick={() => setOpenType(!openType)}>
          <span>Tipo</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            {activeCount("type") > 0 && <span style={countBubbleStyle}>{activeCount("type")}</span>}
            <span style={triangleStyle(openType)}>▼</span>
          </div>
        </h4>
        {openType &&
          ["Camisetas", "Sudaderas", "Gorras"].map((t) => (
            <label
              key={t}
              style={{
                display: "block",
                marginBottom: "0.4rem",
                fontSize: "0.9rem",
                userSelect: "none",
                textDecoration: "none",
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

      {/* Tamaño */}
      <div style={{ marginBottom: "1rem" }}>
        <h4 style={titleStyle} onClick={() => setOpenTamaño(!openTamaño)}>
          <span>Tamaño</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            {activeCount("tamaño") > 0 && (
              <span style={countBubbleStyle}>{activeCount("tamaño")}</span>
            )}
            <span style={triangleStyle(openTamaño)}>▼</span>
          </div>
        </h4>
        {openTamaño &&
          ["Pequeño", "Grande"].map((t) => (
            <label
              key={t}
              style={{
                display: "block",
                marginBottom: "0.4rem",
                fontSize: "0.9rem",
                userSelect: "none",
                textDecoration: "none",
              }}
            >
              <input
                type="checkbox"
                checked={filters.tamaño.includes(t)}
                onChange={() => toggleTamaño(t)}
                style={{ width: "14px", height: "14px", marginRight: "6px" }}
              />
              {t}
            </label>
          ))}
      </div>

      {/* Colores */}
      <div style={{ marginBottom: "1rem" }}>
        <h4 style={titleStyle} onClick={() => setOpenColor(!openColor)}>
          <span>Colores</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            {activeCount("color") > 0 && (
              <span style={countBubbleStyle}>{activeCount("color")}</span>
            )}
            <span style={triangleStyle(openColor)}>▼</span>
          </div>
        </h4>
        {openColor &&
          ["Blanco", "Azul", "Amarillo", "Verde", "Morado", "Café", "Rojo"].map((c) => (
            <label
              key={c}
              style={{
                display: "block",
                marginBottom: "0.4rem",
                fontSize: "0.9rem",
                userSelect: "none",
                textDecoration: "none",
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
          ))}
      </div>

      {/* Precio */}
      <div style={{ marginBottom: "1rem" }}>
        <h4 style={titleStyle} onClick={() => setOpenPrice(!openPrice)}>
          <span>Precio</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            {priceEnabled && (
              <span
                style={{
                  background: "red",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                  marginLeft: "6px",
                }}
              ></span>
            )}
            <span style={triangleStyle(openPrice)}>▼</span>
          </div>
        </h4>
        {openPrice && (
          <>
            <input
              type="range"
              min={minPrice}
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
                  width: 14px;
                  height: 14px;
                  border-radius: 50%;
                  background: #D91604;
                  border: 1px solid #B00000;
                  cursor: pointer;
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

            <div style={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
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
                style={{ margin: 0, fontSize: "0.85rem", color: priceEnabled ? "black" : "#666" }}
              >
                USD: {filters.price[1]}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
