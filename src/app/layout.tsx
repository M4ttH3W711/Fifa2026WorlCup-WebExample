import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { StoreProvider } from "./context/StoreContext"; // <- Importar el contexto

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIFA 2026",
  description: "Un sitio web alusivo al mundial del 2026 - Programación Visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        cz-shortcut-listen="true"
      >
        <StoreProvider>
          {/* Navbar visible en todas las páginas */}
          <Navbar />

          {/* Contenido principal */}
          <main className="flex-grow">{children}</main>

          {/* Footer al final */}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
