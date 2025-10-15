"use client";

import React from "react";
import Link from "next/link";
import {
  ProductsIcon,
  CartIcon,
  FavsIcon,
} from "./Icons";

type MenuType = "store" | "profile";

interface SubMenusProps {
  type: MenuType;
  pathname: string;
}

const SubMenus: React.FC<SubMenusProps> = ({ type, pathname }) => {
  if (type === "store") {
    return (
      <>
        <Link href="/Tienda/Productos">
          <button
            aria-current={pathname === "/Tienda/Productos" ? "page" : undefined}
            className={`flex items-center gap-2 w-full text-left px-4 py-2 border-b border-gray-300 cursor-pointer transition-colors duration-150
              ${pathname === "/Tienda/Productos" ? "bg-[#63F2CA] text-black hover:bg-[#B9FAEB]" : "text-black hover:bg-[#B9FAEB]"}`}
          >
            <ProductsIcon />
            Productos
          </button>
        </Link>

        <Link href="/Tienda/Carrito">
          <button
            aria-current={pathname === "/Tienda/Carrito" ? "page" : undefined}
            className={`flex items-center gap-2 w-full text-left px-4 py-2 border-b border-gray-300 cursor-pointer transition-colors duration-150
              ${pathname === "/Tienda/Carrito" ? "bg-[#63F2CA] text-black hover:bg-[#B9FAEB]" : "text-black hover:bg-[#B9FAEB]"}`}
          >
            <CartIcon />
            Carrito
          </button>
        </Link>

        <Link href="/Tienda/Favoritos">
          <button
            aria-current={pathname === "/Tienda/Favoritos" ? "page" : undefined}
            className={`flex items-center gap-2 w-full text-left px-4 py-2 cursor-pointer transition-colors duration-150
              ${pathname === "/Tienda/Favoritos" ? "bg-[#63F2CA] text-black hover:bg-[#B9FAEB]" : "text-black hover:bg-[#B9FAEB]"}`}
          >
            <FavsIcon />
            Favoritos
          </button>
        </Link>
      </>
    );
  }

  if (type === "profile") {
    return (
      <>
        <Link href="/IniciarSesion">
          <button
            aria-current={pathname === "/IniciarSesion" ? "page" : undefined}
            className={`w-full text-left px-4 py-2 border-b border-gray-300 cursor-pointer transition-colors duration-150
              ${pathname === "/IniciarSesion" ? "bg-[#63F2CA] text-black hover:bg-[#B9FAEB]" : "text-black hover:bg-[#B9FAEB]"}`}
          >
            Iniciar sesión
          </button>
        </Link>

        <Link href="/CrearCuenta">
          <button
            aria-current={pathname === "/CrearCuenta" ? "page" : undefined}
            className={`w-full text-left px-4 py-2 cursor-pointer transition-colors duration-150
              ${pathname === "/CrearCuenta" ? "bg-[#63F2CA] text-black hover:bg-[#B9FAEB]" : "text-black hover:bg-[#B9FAEB]"}`}
          >
            Crear cuenta
          </button>
        </Link>
      </>
    );
  }

  return null;
};

export default SubMenus;
