import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rafa Treggia",
  description: "Soy Rafael Treggia, un Desarrollador Fullstack, apasionado por crear soluciones creativas e innovadoras. En mi portfolio podrás ver algunos de mis proyectos más destacados. Siempre estoy abierto a nuevas oportunidades de trabajo y colaboraciones. ¡Hablemos y hagamos algo increíble juntos!",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon.jpg',
        href: '/images/icon.jpg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon.jpg',
        href: '/images/icon.jpg',
      },
    ],
  },



};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `${inter.className} overflow-x-hidden w-screen`}>{children}</body>
    </html>
  );
}
