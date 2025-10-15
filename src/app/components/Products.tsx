import React from "react";
import type { Product } from "../data/products";
import ProductButtons from "./Buttons";

interface ProductsProps {
  products: Product[];
  search: string;
  maxCardWidth?: number; // ancho máximo opcional
}

const Products: React.FC<ProductsProps> = ({ products, search, maxCardWidth }) => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 justify-items-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-[1.02] hover:shadow-xl border-2 border-transparent hover:border-[#117318] flex flex-col w-full"
          style={maxCardWidth ? { maxWidth: `${maxCardWidth}px` } : undefined}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover cursor-pointer"
          />

          <div className="p-4 flex flex-col justify-between flex-grow relative">
            <h4 className="font-semibold text-lg cursor-pointer hover:text-gray-800">
              {product.name}
            </h4>
            <div className="flex justify-between items-center mt-3 relative">
              <p className="bg-blue-600 text-white font-bold px-3 py-1 rounded-lg cursor-pointer">
                USD ${product.price}
              </p>
            </div>
          </div>

          {/* Botones */}
          <div className="absolute top-3 right-3 bottom-3 flex flex-col justify-between items-end">
            <ProductButtons product={product} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
