"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FilterSidebar from "../components/FilterSidebar";
import Searchbar from "../components/Searchbar";
import Products from "../components/Products";

interface Product {
  id: number;
  name: string;
  color: string;
  price: number;
  tags: string[];
  type: "Camisetas" | "Sudaderas" | "Gorras";
  image: string;
}

// 🔹 Datos simulados
const allProducts: Product[] = [
  // Camisetas
  { id: 1, name: "Camiseta blanca de Los Angeles", color: "Blanco", price: 919, tags: ["Spring"], type: "Camisetas", image: "/images/camiseta1.jpg" },
  { id: 2, name: "Camiseta de Guadalajara", color: "Verde", price: 919, tags: ["Smart"], type: "Camisetas", image: "/images/camiseta2.jpg" },
  { id: 3, name: "Camiseta de Boston", color: "Amarillo", price: 919, tags: ["Modern"], type: "Camisetas", image: "/images/camiseta3.jpg" },
  { id: 4, name: "Playera Fifa 2026 Mexico", color: "Negro", price: 467, tags: ["Spring", "Smart"], type: "Camisetas", image: "/images/camiseta4.jpg" },
  { id: 5, name: "Camiseta de Filadelfia", color: "Azul", price: 827, tags: ["Modern"], type: "Camisetas", image: "/images/camiseta5.jpg" },
  { id: 6, name: "Camiseta de Seattle", color: "Morado", price: 827, tags: ["Spring"], type: "Camisetas", image: "/images/camiseta6.jpg" },

  // Sudaderas
  { id: 7, name: "Sudadera roja México", color: "Rojo", price: 1200, tags: ["Winter"], type: "Sudaderas", image: "/images/sudadera1.jpg" },
  { id: 8, name: "Sudadera azul Francia", color: "Azul", price: 1300, tags: ["Smart"], type: "Sudaderas", image: "/images/sudadera2.jpg" },
  { id: 9, name: "Sudadera negra básica", color: "Negro", price: 999, tags: ["Modern"], type: "Sudaderas", image: "/images/sudadera3.jpg" },
  { id: 10, name: "Sudadera blanca USA", color: "Blanco", price: 1100, tags: ["Spring"], type: "Sudaderas", image: "/images/sudadera4.jpg" },
  { id: 11, name: "Sudadera verde Brasil", color: "Verde", price: 1250, tags: ["Smart"], type: "Sudaderas", image: "/images/sudadera5.jpg" },
  { id: 12, name: "Sudadera amarilla Colombia", color: "Amarillo", price: 1150, tags: ["Modern"], type: "Sudaderas", image: "/images/sudadera6.jpg" },

  // Gorras
  { id: 13, name: "Gorra negra NY", color: "Negro", price: 450, tags: ["Urban"], type: "Gorras", image: "/images/gorra1.jpg" },
  { id: 14, name: "Gorra blanca LA", color: "Blanco", price: 470, tags: ["Spring"], type: "Gorras", image: "/images/gorra2.jpg" },
  { id: 15, name: "Gorra roja Chicago", color: "Rojo", price: 490, tags: ["Modern"], type: "Gorras", image: "/images/gorra3.jpg" },
  { id: 16, name: "Gorra azul Dallas", color: "Azul", price: 500, tags: ["Smart"], type: "Gorras", image: "/images/gorra4.jpg" },
  { id: 17, name: "Gorra verde Seattle", color: "Verde", price: 480, tags: ["Urban"], type: "Gorras", image: "/images/gorra5.jpg" },
  { id: 18, name: "Gorra amarilla Miami", color: "Amarillo", price: 495, tags: ["Modern"], type: "Gorras", image: "/images/gorra6.jpg" },
];

const Page = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    tags: [] as string[],
    color: [] as string[],
    price: [0, 2000] as [number, number],
  });

  // 🔹 Filtrado dinámico
  const filteredProducts = allProducts.filter((product) => {
    const query = search.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.type.toLowerCase().includes(query) ||
      product.color.toLowerCase().includes(query);

    const matchesColor = filters.color.length === 0 || filters.color.includes(product.color);
    const matchesTags = filters.tags.length === 0 || filters.tags.some((tag) => product.tags.includes(tag));
    const matchesPrice = product.price >= filters.price[0] && product.price <= filters.price[1];

    return matchesSearch && matchesColor && matchesTags && matchesPrice;
  });

  return (
    <>
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <FilterSidebar filters={filters} setFilters={setFilters} />

        <div className="flex-1">
          {/* Barra de búsqueda */}
          <Searchbar search={search} setSearch={setSearch} />

          {/* Productos */}
          <Products products={filteredProducts} search={search} />
        </div>
      </div>
    </>
  );
};

export default Page;
