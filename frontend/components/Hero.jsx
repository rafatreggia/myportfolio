"use client";
import React from "react";
import { Button } from "./ui/button";
import { BoxReveal } from "./magicui/box-reveal";

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
            <Button>click here</Button>
            <Button>click here</Button>
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
