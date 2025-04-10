"use client"

import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import SobreMi from "@/components/SobreMi";
import Software from "@/components/Software";
import Tecnologias from "@/components/Tecnologias";

export default function Home() {
  return (
    <div className="w-full min-h-[100vh] px-10 xl:px-20 relative">
      
      <Hero/>
      <Software/>
      
      <Tecnologias/>
      <SobreMi/>
      <Formulario/>
      

    </div>
  );
}
