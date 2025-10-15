"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import FilterSidebar, { Filters } from "../../components/FilterSidebar";
import Searchbar from "../../components/Searchbar";
import Products from "../../components/Products";
import { allProducts } from "../../data/products";

const Page = () => {
  const maxPrice = Math.max(...allProducts.map((p) => p.price));
  const minPrice = Math.min(...allProducts.map((p) => p.price)); // 🔹 Nuevo

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filters>({
    tamaño: [],
    color: [],
    type: [],
    price: [minPrice, maxPrice], // 🔹 Inicia con el rango real
  });

  const [priceEnabled, setPriceEnabled] = useState(false);

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

    const matchesTamaño =
      filters.tamaño.length === 0 || filters.tamaño.includes(product.tamaño);

    const matchesType =
      filters.type.length === 0 || filters.type.includes(product.type);

    const matchesPrice = !priceEnabled
      ? true
      : product.price >= filters.price[0] && product.price <= filters.price[1];

    return (
      matchesSearch &&
      matchesColor &&
      matchesTamaño &&
      matchesType &&
      matchesPrice
    );
  });

  return (
    <div className="flex">
      <FilterSidebar
        filters={filters}
        setFilters={setFilters}
        maxPrice={maxPrice}
        priceEnabled={priceEnabled}
        setPriceEnabled={setPriceEnabled}
        minPrice={minPrice} // 🔹 Nuevo prop
      />

      <div className="flex-1">
        <Searchbar search={search} setSearch={setSearch} />
        <Products products={filteredProducts} search={search} />
      </div>
    </div>
  );
};

export default Page;
