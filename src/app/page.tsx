import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <img src="titlefifa.jpg" alt="" className="w-full" />

      {/* Sección Países Anfitriones */}
      <section className="mt-0 px-6 bg-[#63F2CA] py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Países Anfitriones
        </h2>

        <div className="flex gap-10 justify-center mb-16">
          {/* Canadá */}
          <div className="shadow-lg rounded-xl p-6 w-96 bg-white transform transition-transform duration-300 hover:scale-105">
            <h3 className="font-semibold mb-4 text-xl">Canadá</h3>
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image
                src="/can.png"
                alt="Canadá"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-4 right-4 text-white font-bold text-3xl drop-shadow-lg">
                CAN
              </span>
            </div>
          </div>

          {/* México */}
          <div className="shadow-lg rounded-xl p-6 w-96 bg-white transform transition-transform duration-300 hover:scale-105">
            <h3 className="font-semibold mb-4 text-xl">México</h3>
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image
                src="/mex.png"
                alt="México"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-4 right-4 text-white font-bold text-3xl drop-shadow-lg">
                MEX
              </span>
            </div>
          </div>

          {/* Estados Unidos */}
          <div className="shadow-lg rounded-xl p-6 w-96 bg-white transform transition-transform duration-300 hover:scale-105">
            <h3 className="font-semibold mb-4 text-xl">EE.UU.</h3>
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image
                src="/usa.png"
                alt="Estados Unidos"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-4 right-4 text-white font-bold text-3xl drop-shadow-lg">
                USA
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
