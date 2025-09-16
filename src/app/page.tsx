import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <img src="titlefifa.jpg" alt="" />
      <h1>Sitio web de demostración - FIFA 2026</h1>
      <h1>Página de Inicio "home"</h1>
    </>
  );
}
