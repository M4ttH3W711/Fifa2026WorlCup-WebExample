"use client";

import React from "react";
import type { Product } from "@/app/data/products";

interface CartPriceCalculatorProps {
  products: Product[];
}

const CartPriceCalculator: React.FC<CartPriceCalculatorProps> = ({ products }) => {
  // Suma de los precios de todos los productos
  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div
      className="mt-6 p-6 rounded-2xl bg-white shadow-xl border border-gray-200 max-w-[220px] w-full"
      style={{ textAlign: "center" }}
    >
      <h3 className="text-lg font-semibold mb-3">Total del carrito</h3>
      <p className="text-2xl font-bold">USD ${total.toFixed(2)}</p>
    </div>
  );
};

export default CartPriceCalculator;
