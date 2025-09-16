"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const buttons = [
    { name: "Inicio", path: "/" },
    { name: "Tienda", path: "/Tienda" },
    { name: "Comunidad", path: "/comunidad" },
    { name: "Recursos", path: "/recursos" },
    { name: "Portafolio", path: "/portafolio" },
    { name: "Contacto", path: "/contacto" },
    { name: "Link", path: "/link" },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 250);
  };

  return (
    <nav className="w-full bg-[#3552F2] p-4 flex items-center justify-between">
      {/* Logos */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://digitalhub.fifa.com/transform/157d23bf-7e13-4d7b-949e-5d27d340987e/WC26_Logo?&io=transform:fill,height:210&quality=75"
            alt="Logo Mundial 2026"
            className="h-12 cursor-pointer"
          />
        </Link>
        <img
          src="https://digitalhub.fifa.com/transform/befe3a64-328b-453c-8b58-0faeb9103684/FIFA_Logo_White_Generic?&io=transform:fill&quality=75"
          alt="Logo FIFA"
          className="h-10"
        />
      </div>

      {/* Botones de navegación */}
      <div className="flex items-center gap-3">
        {buttons.map((btn) => {
          const isActive = pathname === btn.path;
          return (
            <Link key={btn.name} href={btn.path}>
              <button
                className={`px-4 py-2 rounded-md transition-all duration-200 cursor-pointer
                  ${
                    isActive
                      ? "bg-[#63F2CA] text-black"
                      : "bg-[#3552F2] text-white hover:bg-[#6c82f7]"
                  }`}
              >
                {btn.name}
              </button>
            </Link>
          );
        })}

        {/* Botón de perfil */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`p-2 rounded-md cursor-pointer transition-all duration-200
              ${
                menuOpen
                  ? "bg-[#6c82f7]"
                  : "bg-[#3552F2] hover:bg-[#6c82f7]"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
          </button>

          {/* Menú desplegable */}
          {menuOpen && (
            <div
              className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg flex flex-col"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/IniciarSesion">
                <button className="w-full text-left px-4 py-2 text-black hover:bg-[#63F2CA] border-b border-gray-300">
                  Iniciar sesión
                </button>
              </Link>
              <Link href="/CrearCuenta">
                <button className="w-full text-left px-4 py-2 text-black hover:bg-[#63F2CA]">
                  Crear cuenta
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
