"use client"
import { TextAnimate } from "@/components/magicui/text-animate"
import Nav from "@/components/Nav"

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Nav />
      <div id="sobremi" className="p-6 md:p-10 w-full flex flex-col items-center justify-center max-w-7xl mx-auto">
        <h1 className="title text-4xl md:text-5xl font-bold mb-10 text-center relative after:content-[''] after:absolute after:w-20 after:h-1  after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:mt-2 pb-4">
          Acerca de Mi
        </h1>

        <div className="mt-8 flex flex-col justify-around gap-8 w-full items-center lg:flex-row lg:max-w-[1200px] mb-12">
          <div className="lg:max-w-[500px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className="text-gray-700 dark:text-gray-200 leading-relaxed"
            >
              ¡Hola! Soy Rafa, un apasionado del desarrollo web y la tecnología, actualmente en proceso de construir mi
              propio portfolio para mostrar mi trabajo. Me encanta crear aplicaciones modernas y escalables,
              aprovechando las herramientas más potentes del ecosistema JavaScript.
            </TextAnimate>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img
              src="/images/imgsobremi.webp"
              alt="rafa1"
              className="w-full max-w-[500px] max-h-[400px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse justify-around gap-8 w-full items-center lg:flex-row mb-12">
          <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img
              src="/images/myfamily.webp"
              alt="rafa1"
              className="w-[50vw] h-[50vh] lg:w-[500px] lg:h-[400px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="lg:max-w-[500px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className="text-gray-700 dark:text-gray-200 leading-relaxed text-center lg:text-left"
            >
              Tengo la suerte de compartir mi vida con mi mujer, quien ha sido mi compañera incondicional en cada etapa,
              apoyándome en cada desafío y celebrando cada logro juntos. Nuestro pequeño hijo de siete meses ha traído
              una luz nueva a nuestras vidas. Ser papá ha sido la experiencia más desafiante y hermosa que he vivido.
              Aprender a equilibrar mi crecimiento profesional con la paternidad me ha hecho valorar aún más cada
              instante y esforzarme por ser la mejor versión de mí mismo, tanto en mi trabajo como en mi hogar.
            </TextAnimate>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-around gap-8 w-full items-center lg:flex-row lg:max-w-[1200px] mb-12">
          <div className="lg:max-w-[500px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className="text-gray-700 dark:text-gray-200 leading-relaxed"
            >
              Me apasiona el deporte, especialmente el tenis y el vóley. Disfruto la competencia, la estrategia y el
              esfuerzo que implican. El deporte me motiva a superarme y a mantenerme activo. Es una fuente de energía,
              aprendizaje y diversión en mi vida.
            </TextAnimate>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img
              src="/images/imgtenis.webp"
              alt="rafa1"
              className="w-full max-w-[500px] max-h-[400px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse justify-around gap-8 w-full items-center lg:flex-row mb-12">
          <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <img
              src="/images/imgviaje.webp"
              alt="rafa1"
              className="w-[50vw] h-[50vh] lg:w-[500px] lg:h-[400px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="lg:max-w-[500px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className="text-gray-700 dark:text-gray-200 leading-relaxed text-center lg:text-left"
            >
              Me encanta viajar, descubrir nuevos lugares y sumergirme en distintas culturas. Disfruto explorando el
              mundo y también conociendo la belleza y diversidad de mi país. Cada viaje es una oportunidad para aprender
              y vivir nuevas experiencias
            </TextAnimate>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
