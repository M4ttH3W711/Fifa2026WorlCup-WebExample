"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  // Estado para cambiar el fondo dinámicamente
  const [bgImage, setBgImage] = useState(
    "https://st.depositphotos.com/27490524/60691/i/450/depositphotos_606914428-stock-photo-calgary-alberta-canada-sep-2022.jpg"
  );

  // Función para restaurar el fondo original
  const resetBackground = () =>
    setBgImage(
      "https://st.depositphotos.com/27490524/60691/i/450/depositphotos_606914428-stock-photo-calgary-alberta-canada-sep-2022.jpg"
    );

  return (
    <>
      <img src="titlefifa.jpg" alt="" className="w-full" />

      {/* Sección Países Anfitriones */}
      <section
        className="relative mt-0 px-6 py-10 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Sombras superior e inferior */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

        <h2
          className="text-3xl font-bold mb-8 text-center text-white relative z-10"
          style={{
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          }}
        >
          Países Anfitriones
        </h2>


        <div className="flex flex-wrap justify-center gap-10 mb-16 relative z-10">
          {/* MÉXICO */}
          <div
            onMouseEnter={() =>
              setBgImage(
                "https://previews.123rf.com/images/viperagp/viperagp1406/viperagp140600137/29112532-soccer-ball-with-mexican-flag-on-football-field-closeup.jpg"
              )
            }
            onMouseLeave={resetBackground}
            className="shadow-lg rounded-xl p-6 w-96 bg-white/90 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <h3 className="font-semibold mb-4 text-xl text-center">México</h3>
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image src="/mex.png" alt="México" fill className="object-cover" />
            </div>
          </div>

          {/* ESTADOS UNIDOS */}
          <div
            onMouseEnter={() =>
              setBgImage(
                "https://previews.123rf.com/images/ramirezom/ramirezom1507/ramirezom150700617/42835685-soccer-ball-on-america-flag.jpg"
              )
            }
            onMouseLeave={resetBackground}
            className="shadow-lg rounded-xl p-6 w-96 bg-white/90 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <h3 className="font-semibold mb-4 text-xl text-center">EE.UU.</h3>
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image src="/usa.png" alt="Estados Unidos" fill className="object-cover" />
            </div>
          </div>

          {/* CANADÁ */}
          <div
            onMouseEnter={() =>
              setBgImage(
                "https://us.123rf.com/450wm/ramirezom/ramirezom1508/ramirezom150800166/43550854-bal%C3%B3n-de-f%C3%BAtbol-en-canad%C3%A1-color-de-la-bandera-de-la-vendimia.jpg?ver=6"
              )
            }
            onMouseLeave={resetBackground}
            className="shadow-lg rounded-xl p-6 w-96 bg-white/90 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <h3 className="font-semibold mb-4 text-xl text-center">Canadá</h3>
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image src="/can.png" alt="Canadá" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
