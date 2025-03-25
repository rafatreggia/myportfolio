"use client"
import React from 'react'
import { TextAnimate } from './magicui/text-animate'

const SobreMi = () => {
  return (
    <div id='sobremi' className='mt-[200px] max-w-[1200px] '>
     <h1 className='title'>Acerca de Mi</h1>
     <div className='mt-5 flex flex-col justify-around gap-4 w-full items-center lg:flex-row'>
      <TextAnimate animation="blurInUp" by="character" once>
      ¡Hola! Soy Rafa, un apasionado del desarrollo web y la tecnología, actualmente en proceso de construir mi propio portfolio para mostrar mi trabajo. Me encanta crear aplicaciones modernas y escalables, aprovechando las herramientas más potentes del ecosistema JavaScript.

      </TextAnimate>
      <img src="/images/imgsobremi.webp" alt="rafa1" className="w-[50vw] h-[50vh] object-cover"/>

     </div>
      </div>
  )
}

export default SobreMi