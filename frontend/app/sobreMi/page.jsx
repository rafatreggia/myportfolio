"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import Nav from "@/components/Nav";
import React from "react";

const Page = () => {
  return (
    <div>
        <Nav/>
      <div
        id="sobremi"
        className=" w-full flex flex-col items-center "
      >
        <h1 className="title">Acerca de Mi</h1>
        <div className="mt-5 flex flex-col justify-around gap-5 w-full items-center lg:flex-row lg:max-w-[1200px] mb-5">
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="lg:max-w-[500px]"
          >
            ¡Hola! Soy Rafa, un apasionado del desarrollo web y la tecnología,
            actualmente en proceso de construir mi propio portfolio para mostrar
            mi trabajo. Me encanta crear aplicaciones modernas y escalables,
            aprovechando las herramientas más potentes del ecosistema
            JavaScript.
          </TextAnimate>
          <img
            src="/images/imgsobremi.webp"
            alt="rafa1"
            className="w-full max-w-[500px] max-h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="mt-5 flex flex-col-reverse justify-around gap-5 w-full items-center lg:flex-row mb-4">
          <img
            src="/images/myfamily.webp"
            alt="rafa1"
            className="w-[50vw] h-[50vh] object-cover rounded-lg"
          />
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="lg:max-w-[500px] text-center"
          >
            Tengo la suerte de compartir mi vida con mi mujer, quien ha sido mi
            compañera incondicional en cada etapa, apoyándome en cada desafío y
            celebrando cada logro juntos. Es increíble cómo la vida cambia
            cuando encuentras a alguien con quien compartir sueños, proyectos y
            hasta las pequeñas alegrías del día a día. Nuestro pequeño hijo de
            seis meses ha traído una luz nueva a nuestras vidas. Su sonrisa
            ilumina cualquier momento y cada día con él es un nuevo
            descubrimiento. Desde sus primeras risas hasta sus pequeños intentos
            por explorar el mundo, ser papá ha sido la experiencia más
            desafiante y hermosa que he vivido. Aprender a equilibrar mi
            crecimiento profesional con la paternidad me ha hecho valorar aún
            más cada instante y esforzarme por ser la mejor versión de mí mismo,
            tanto en mi trabajo como en mi hogar.
          </TextAnimate>
        </div>
        
        <div className="mt-5 flex flex-col justify-around gap-5 w-full items-center lg:flex-row lg:max-w-[1200px] mb-4">
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="lg:max-w-[500px]"
          >
            Me apasiona el deporte, especialmente el tenis y el vóley. Disfruto
            la competencia, la estrategia y el esfuerzo que implican. El deporte
            me motiva a superarme y a mantenerme activo. Es una fuente de
            energía, aprendizaje y diversión en mi vida.
          </TextAnimate>
          <img
            src="/images/imgtenis.webp"
            alt="rafa1"
            className="w-full max-w-[500px] max-h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="mt-5 flex flex-col-reverse justify-around gap-5 w-full items-center lg:flex-row mb-4">
          <img
            src="/images/imgviaje.webp"
            alt="rafa1"
            className="w-[50vw] h-[50vh] object-cover rounded-lg"
          />
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="lg:max-w-[500px] text-center"
          >
            Me encanta viajar, descubrir nuevos lugares y sumergirme en
            distintas culturas. Disfruto explorando el mundo y también
            conociendo la belleza y diversidad de mi país. Cada viaje es una
            oportunidad para aprender y vivir nuevas experiencias
          </TextAnimate>
        </div>
      </div>
    </div>
  );
};

export default Page;
