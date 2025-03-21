"use client"

import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import Tecnologias from "@/components/Tecnologias";

export default function Home() {
  return (
    <div className="min-w-[100vw] min-h-[100vh] px-10 xl:px-20">
      <Hero/>
      <Tecnologias/>
      <SobreMi/>
      <Formulario/>
      <Footer/>

    </div>
  );
}
