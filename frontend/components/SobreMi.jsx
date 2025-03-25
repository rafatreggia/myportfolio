"use client";
import React from "react";
import { TextAnimate } from "./magicui/text-animate";

const SobreMi = () => {
  return (
    <div id="sobremi" className="mt-[200px] max-w-[1200px] ">
      <h1 className="title">Acerca de Mi</h1>
      <div className="mt-5 flex flex-col justify-around gap-4 w-full items-center lg:flex-row">
        <TextAnimate animation="blurInUp" by="character" once>
          ¡Hola! Soy Rafa, un apasionado del desarrollo web y la tecnología,
          actualmente en proceso de construir mi propio portfolio para mostrar
          mi trabajo. Me encanta crear aplicaciones modernas y escalables,
          aprovechando las herramientas más potentes del ecosistema JavaScript.
        </TextAnimate>
        <img
          src="/images/imgsobremi.webp"
          alt="rafa1"
          className="w-[50vw] h-[50vh] object-cover"
        />
      </div>
      <div className="mt-5 flex flex-col justify-around gap-4 w-full items-center lg:flex-row">
      <img
          src="/images/myfamily.webp"
          alt="rafa1"
          className="w-[50vw] h-[50vh] object-cover"
        />
        <TextAnimate animation="blurInUp" by="character" once>
          Tengo la suerte de compartir mi vida con mi mujer, quien ha sido mi
          compañera incondicional en cada etapa, apoyándome en cada desafío y
          celebrando cada logro juntos. Es increíble cómo la vida cambia cuando
          encuentras a alguien con quien compartir sueños, proyectos y hasta las
          pequeñas alegrías del día a día. Nuestro pequeño hijo de seis meses ha
          traído una luz nueva a nuestras vidas. Su sonrisa ilumina cualquier
          momento y cada día con él es un nuevo descubrimiento. Desde sus
          primeras risas hasta sus pequeños intentos por explorar el mundo, ser
          papá ha sido la experiencia más desafiante y hermosa que he vivido.
          Aprender a equilibrar mi crecimiento profesional con la paternidad me
          ha hecho valorar aún más cada instante y esforzarme por ser la mejor
          versión de mí mismo, tanto en mi trabajo como en mi hogar.
        </TextAnimate>
        
      </div>
    </div>
  );
};

export default SobreMi;
