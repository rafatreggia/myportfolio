import { Inter } from "next/font/google";
import "./globals.css";
import { Lexend } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Rafa Treggia",
  description:
    "Soy Rafael Treggia, un Desarrollador Fullstack, apasionado por crear soluciones creativas e innovadoras. En mi portfolio podrás ver algunos de mis proyectos más destacados. Siempre estoy abierto a nuevas oportunidades de trabajo y colaboraciones. ¡Hablemos y hagamos algo increíble juntos!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/icon.jpg",
        href: "/images/icon.jpg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/icon.jpg",
        href: "/images/icon.jpg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className} overflow-x-hidden w-screen`}>
        {children}
        <Toaster />
        <Nav />
        <Footer />
      </body>
    </html>
  );
}
