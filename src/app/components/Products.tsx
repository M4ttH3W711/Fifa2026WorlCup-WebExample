import React from "react";

interface Product {
  id: number;
  name: string;
  color: string;
  price: number;
  tags: string[];
  type: "Camisetas" | "Sudaderas" | "Gorras";
  image: string;
}

interface ProductsProps {
  products: Product[];
  search: string;
}

const Products: React.FC<ProductsProps> = ({ products, search }) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-10 text-gray-500">
        <p className="mb-4">No se han encontrado resultados para su búsqueda: <span className="font-semibold">{search}</span></p>
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
        <div key={p.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <img src={p.image} alt={p.name} className="w-full h-56 object-cover" />
          <div className="p-4">
            <h4 className="font-semibold text-lg">{p.name}</h4>
            <p className="text-gray-600">Tipo: {p.type}</p>
            <p className="text-gray-600">Color: {p.color}</p>
            <p className="text-blue-600 font-bold mt-2">MXN ${p.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
