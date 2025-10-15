"use client";

import React, { useState } from "react";
import {
  FavsIcon,
  AddFavIcon,
  FavsFilledIcon,
  RemoveFavIcon,
  CartIcon,
  AddCartIcon,
  CartFilledIcon,
  RmvCartIcon,
} from "./Icons";
import { Product } from "../data/products";
import { useStore } from "../context/StoreContext";

interface ButtonsProps {
  product: Product;
}

const Buttons: React.FC<ButtonsProps> = ({ product }) => {
  const { cart, favorites, addToCart, removeFromCart, toggleFavorite } = useStore();
  const [hoverFavorite, setHoverFavorite] = useState(false);
  const [hoverCart, setHoverCart] = useState(false);

  const favoriteColor = "#e0245e";
  const cartColor = "#22c55e";

  const isFavorite = favorites.some((p) => p.id === product.id);
  const isInCart = cart.some((p) => p.id === product.id);

  const handleFavoriteClick = () => toggleFavorite(product);
  const handleCartClick = () => {
    if (isInCart) removeFromCart(product.id);
    else addToCart(product);
  };

  const renderFavoriteIcon = () => {
    if (!isFavorite)
      return hoverFavorite ? <AddFavIcon size={28} color={favoriteColor} /> : <FavsIcon size={28} color={favoriteColor} />;
    return hoverFavorite ? <RemoveFavIcon size={28} color={favoriteColor} /> : <FavsFilledIcon size={28} color={favoriteColor} />;
  };

  const renderCartButton = () => {
    if (!isInCart) {
      return {
        icon: hoverCart ? <AddCartIcon size={18} color={cartColor} /> : <CartIcon size={18} color={cartColor} />,
        text: "Agregar al carrito",
        bg: "bg-white",
        textColor: "text-black",
        borderColor: cartColor,
      };
    }
    return {
      icon: hoverCart ? <RmvCartIcon size={18} color="white" /> : <CartFilledIcon size={18} color="white" />,
      text: hoverCart ? "Quitar del carrito" : "Añadido al carrito",
      bg: "bg-green-600",
      textColor: "text-white",
      borderColor: "#16a34a",
    };
  };

  const cartButton = renderCartButton();

  return (
    <>
      {/* Favoritos: esquina superior derecha */}
      <button
        onClick={handleFavoriteClick}
        onMouseEnter={() => setHoverFavorite(true)}
        onMouseLeave={() => setHoverFavorite(false)}
        className="absolute top-2 right-2 flex items-center justify-center cursor-pointer transition-transform duration-200 ease-out hover:scale-110"
        style={{ background: "none", padding: 0 }}
      >
        {renderFavoriteIcon()}
      </button>

      {/* Carrito: esquina inferior derecha, altura consistente */}
      <button
        onClick={handleCartClick}
        onMouseEnter={() => setHoverCart(true)}
        onMouseLeave={() => setHoverCart(false)}
        className={`absolute bottom-2 right-2 flex items-center justify-center px-3 py-1 rounded-lg shadow border min-w-[150px] transition-transform duration-200 ease-out whitespace-nowrap ${cartButton.bg} ${cartButton.textColor}`}
        style={{ borderColor: cartButton.borderColor }}
      >
        <span className="mr-2">{cartButton.icon}</span>
        {cartButton.text}
      </button>
    </>
  );
};

export default Buttons;
