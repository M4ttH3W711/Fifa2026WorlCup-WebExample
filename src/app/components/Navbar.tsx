"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  StoreIcon,
  ProductsIcon,
  CartIcon,
  FavsIcon,
  ProfileIcon,
} from "./Icons";

interface SubButton {
  name: string;
  path: string;
  icon: React.FC<{ size?: number; color?: string }>;
}

interface Button {
  name: string;
  path: string;
  icon?: React.FC<{ size?: number; color?: string }>;
  submenu?: SubButton[];
}

const Navbar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const buttons: Button[] = [
    { name: "Inicio", path: "/" },
    { name: "Comunidad", path: "/Comunidad" },
    { name: "Recursos", path: "/Recursos" },
    { name: "Portafolio", path: "/Portafolio" },
    { name: "Contacto", path: "/Contacto" },
    {
      name: "Tienda",
      path: "/Tienda/Productos",
      icon: StoreIcon,
      submenu: [
        { name: "Productos", path: "/Tienda/Productos", icon: ProductsIcon },
        { name: "Carrito", path: "/Tienda/Carrito", icon: CartIcon },
        { name: "Favoritos", path: "/Tienda/Favoritos", icon: FavsIcon },
      ],
    },
    {
      name: "Perfil",
      path: "/IniciarSesion",
      icon: ProfileIcon,
      submenu: [
        { name: "Iniciar sesión", path: "/IniciarSesion", icon: ProfileIcon },
        { name: "Crear cuenta", path: "/CrearCuenta", icon: ProfileIcon },
      ],
    },
  ];

  const handleMenuEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 250);
  };

  return (
    <nav className="z-50 w-full bg-[#3552F2] p-4 flex items-center justify-between">
      {/* Logos */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://digitalhub.fifa.com/transform/157d23bf-7e13-4d7b-949e-5d27d340987e/WC26_Logo?&io=transform:fill,height:210&quality=75"
            alt="Logo Mundial 2026"
            className="h-12 cursor-pointer"
          />
        </Link>
        <Link href="/">
          <img
            src="https://digitalhub.fifa.com/transform/befe3a64-328b-453c-8b58-0faeb9103684/FIFA_Logo_White_Generic?&io=transform:fill&quality=75"
            alt="Logo FIFA"
            className="h-10 cursor-pointer"
          />
        </Link>
      </div>

      {/* Botones */}
      <div className="flex items-center gap-3">
        {buttons.map((btn) => {
          const isActive =
            pathname === btn.path ||
            (btn.submenu && btn.submenu.some((sub) => sub.path === pathname));

          const Icon = btn.icon;

          return (
            <div
              key={btn.name}
              className="relative"
              onMouseEnter={() => btn.submenu && handleMenuEnter(btn.name)}
              onMouseLeave={btn.submenu && handleMenuLeave}
            >
              <Link href={btn.path}>
                <button
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#63F2CA] text-black hover:bg-[#A0F7E5]"
                        : "bg-[#3552F2] text-white hover:bg-[#A0F7E5] hover:text-black"
                    }`}
                >
                  {Icon && <Icon color={isActive ? "black" : "currentColor"} size={20} />}
                  {btn.name}
                </button>
              </Link>

              {/* Submenús */}
              {btn.submenu && openMenu === btn.name && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg flex flex-col">
                  {btn.submenu.map((sub) => {
                    const isSubActive = pathname === sub.path;
                    const SubIcon = sub.icon;

                    return (
                      <Link key={sub.name} href={sub.path}>
                        <button
                          aria-current={isSubActive ? "page" : undefined}
                          className={`flex items-center gap-2 w-full text-left px-4 py-2 border-b border-gray-300 cursor-pointer transition-colors duration-150
                            ${
                              isSubActive
                                ? "bg-[#63F2CA] text-black hover:bg-[#B9FAEB]"
                                : "text-black hover:bg-[#B9FAEB]"
                            }`}
                        >
                          {btn.name === "Tienda" && SubIcon && (
                            <SubIcon
                              size={16}
                              color={isSubActive ? "black" : "currentColor"}
                            />
                          )}
                          {sub.name}
                        </button>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
