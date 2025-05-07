"use client"
import { TextAnimate } from "./magicui/text-animate"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const SobreMi = () => {
  return (
    <div id="sobreMi" className="mt-[200px] w-full flex flex-col items-center relative">
      {/* Decorative background elements */}
      <div className="absolute top-[-50px] left-[10%] w-[200px] h-[200px] rounded-full bg-[#58AF9B]/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-[#58AF9B]/5 blur-3xl -z-10"></div>

      <h1 className="title relative">
        Acerca de Mi
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#58AF9B]/70 rounded-full"></span>
      </h1>

      <div className="mt-12 flex flex-col justify-around gap-8 w-full items-center lg:flex-row lg:max-w-[1200px] mb-10 px-4">
        <div className="lg:max-w-[500px] bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-[#58AF9B]/10 shadow-lg transform transition-all duration-300 hover:shadow-[#58AF9B]/20 hover:-translate-y-1">
          <TextAnimate animation="blurInUp" by="character" once className="text-lg leading-relaxed">
            ¡Hola! Soy Rafa, un apasionado del desarrollo web y la tecnología, actualmente en proceso de construir mi
            propio portfolio para mostrar mi trabajo. Me encanta crear aplicaciones modernas y escalables, aprovechando
            las herramientas más potentes del ecosistema JavaScript.
          </TextAnimate>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#58AF9B]/30 to-[#58AF9B]/10 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            src="/images/imgsobremi.webp"
            alt="rafa1"
            className="w-full max-w-[500px] max-h-[400px] object-cover rounded-lg relative shadow-xl transition-all duration-300 group-hover:scale-[1.01]"
          />
        </div>
      </div>

      <div className="mt-16 flex flex-col-reverse justify-around gap-8 w-full items-center lg:flex-row mb-10 px-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#58AF9B]/10 to-[#58AF9B]/30 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            src="/images/myfamily.webp"
            alt="Mi familia"
            className="w-[50vw] h-[50vh] object-cover rounded-lg relative shadow-xl transition-all duration-300 group-hover:scale-[1.01]"
          />
        </div>
        <div className="lg:max-w-[500px] bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-[#58AF9B]/10 shadow-lg transform transition-all duration-300 hover:shadow-[#58AF9B]/20 hover:-translate-y-1">
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="text-lg leading-relaxed text-center lg:text-left"
          >
            Tengo la suerte de compartir mi vida con mi mujer, quien ha sido mi compañera incondicional en cada etapa,
            apoyándome en cada desafío y celebrando cada logro juntos. Nuestro pequeño hijo de siete meses ha traído una
            luz nueva a nuestras vidas. Ser papá ha sido la experiencia más desafiante y hermosa que he vivido. Aprender
            a equilibrar mi crecimiento profesional con la paternidad me ha hecho valorar aún más cada instante y
            esforzarme por ser la mejor versión de mí mismo, tanto en mi trabajo como en mi hogar.
          </TextAnimate>
        </div>
      </div>

      <Link
        href="/sobreMi"
        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#58AF9B]/10 text-[#58AF9B] hover:bg-[#58AF9B]/20 transition-all duration-300 shadow-md hover:shadow-lg mb-10"
      >
        <span className="text-[16px] font-medium">Conoce más sobre mi</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

      {/* <div className="mt-5 flex flex-col justify-around gap-5 w-full items-center lg:flex-row lg:max-w-[1200px] mb-4">
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          className="lg:max-w-[500px]"
        >
          Me apasiona el deporte, especialmente el tenis y el vóley. Disfruto la
          competencia, la estrategia y el esfuerzo que implican. El deporte me
          motiva a superarme y a mantenerme activo. Es una fuente de energía,
          aprendizaje y diversión en mi vida.
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
          Me encanta viajar, descubrir nuevos lugares y sumergirme en distintas
          culturas. Disfruto explorando el mundo y también conociendo la belleza
          y diversidad de mi país. Cada viaje es una oportunidad para aprender y
          vivir nuevas experiencias
        </TextAnimate>
      </div> */}
    </div>
  )
}

export default SobreMi
