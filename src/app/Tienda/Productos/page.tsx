"use client";

import React, { useState } from "react";
import Navbar from '@/app/components/Navbar'
import FilterSidebar from "../../components/FilterSidebar";
import Searchbar from "../../components/Searchbar";
import Products from "../../components/Products";
import { allProducts } from "../../data/products";

const Page = () => {
  // 🔹 Calcular precio máximo de todos los productos
  const maxPrice = Math.max(...allProducts.map((p) => p.price));

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    tono: [] as string[],
    color: [] as string[],
    type: [] as string[], // ✅ agregado para evitar fallos
    price: [0, maxPrice] as [number, number],
  });

  const [priceEnabled, setPriceEnabled] = useState(false);

  // 🔹 Filtrado dinámico
  const filteredProducts = allProducts.filter((product) => {
    const query = search.toLowerCase();

    const matchesSearch =
      query === "" ||
      product.name.toLowerCase().includes(query) ||
      product.type.toLowerCase().includes(query) ||
      product.color.some((c) => c.toLowerCase().includes(query));

    const matchesColor =
      filters.color.length === 0 ||
      filters.color.some((c) => product.color.includes(c));

    const matchesTono =
      filters.tono.length === 0 || filters.tono.includes(product.tono);

    const matchesType =
      filters.type.length === 0 || filters.type.includes(product.type); // ✅ agregado

    const matchesPrice = !priceEnabled
      ? true
      : product.price >= filters.price[0] && product.price <= filters.price[1];

    return matchesSearch && matchesColor && matchesTono && matchesType && matchesPrice;
  });

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          maxPrice={maxPrice}
          priceEnabled={priceEnabled}
          setPriceEnabled={setPriceEnabled}
        />

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
