"use client";

import React, { useState, useEffect } from "react";
import { useStore } from "@/app/context/StoreContext";
import Products from "@/app/components/Products";

const FavoritosPage: React.FC = () => {
  const { favorites } = useStore();
  const [favoritos, setFavoritos] = useState(favorites);

  useEffect(() => {
    setFavoritos(favorites);
  }, [favorites]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/FondoFIFA.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "1rem",
        paddingBottom: "2rem",
      }}
    >
      {/* Título */}
      <div className="flex flex-col items-center mt-6">
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
          }}
        >
          Tus productos favoritos
        </h1>
        <div
          style={{
            width: "60%",
            height: "2px",
            backgroundColor: "gray",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
            marginTop: "0.5rem",
            marginBottom: "2rem",
          }}
        />
      </div>

      {/* Cuadro que solo difumina */}
      <div className="mx-auto max-w-7xl backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
        {favoritos.length === 0 ? (
          <p className="text-center text-gray-700">No tienes productos favoritos.</p>
        ) : (
          <Products products={favoritos} search="" maxCardWidth={380} />
        )}
      </div>
    </div>
  );
};

export default FavoritosPage;
