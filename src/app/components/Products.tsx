import React from "react";
import type { Product } from "../data/products";

interface ProductsProps {
  products: Product[];
  search: string;
}

const Products: React.FC<ProductsProps> = ({ products, search }) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-10 text-gray-500">
        <p className="mb-4">
          No se han encontrado resultados para su búsqueda:{" "}
          <span className="font-semibold">{search}</span>
        </p>
        <img
          src="https://media.tenor.com/wJoIg9kMUB0AAAAM/duck-spin.gif"
          alt="Sin resultados"
          className="w-40 h-40"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-[1.02] hover:shadow-xl border-2 border-transparent hover:border-[#117318] flex flex-col"
        >
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-70 object-cover cursor-pointer"
          />
          <div className="p-4 flex flex-col justify-between flex-grow">
            <h4 className="font-semibold text-lg cursor-pointer hover:text-gray-800">
              {p.name}
            </h4>
            <p
              className="mt-3 self-start bg-green-600 text-white font-bold px-3 py-1 rounded-lg cursor-pointer hover:bg-green-500 transition"
            >
              USD ${p.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
