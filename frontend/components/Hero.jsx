"use client";
import React from "react";
import { Button } from "./ui/button";
import { BoxReveal } from "./magicui/box-reveal";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full h-[100vh] flex md:justify-around justify-center
       items-center gap-8 md:flex-row flex-col md:gap-4"
    >
      <div>
        <BoxReveal boxColor={"#58AF9B"} duration={1}>
          <h1 className="text-[50px] font-semibold">Hola, soy Rafa</h1>
        </BoxReveal>
        <BoxReveal boxColor={"#58AF9B"} duration={1}>
          {" "}
          <h2 className="text-[20px] text-gray-500 max-w-2xl">
            Soy un desarrollador web Full Stack apasionado por crear
            experiencias digitales innovadoras. Transformo ideas en código
            eficiente y funcional
          </h2>
        </BoxReveal>
        <BoxReveal boxColor={"#58AF9B"} duration={1}>
          <div className="mt-6 space-x-5">
            <Button><Mail />Contacto</Button>
            <a  href="/documentos/cvRafa.pdf" download className="border-gray-900 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground
            inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-b-[2px] border-r-[2px] h-9 px-4 py-2 cursor-pointer"><Download />Descargar CV</a>
            
          </div>
        </BoxReveal>
      </div>
      <img
        src="/images/imgrafaportfolio.webp"
        alt="Foto Rafa"
        className="w-[250px] 2xl:w-[500px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
      />
    </div>
  );
};

export default Hero;
