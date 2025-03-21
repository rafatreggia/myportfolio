import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <img src="/images/icon.jpg" alt="Foto Rafa" className='w-[500px] h-[500px]'/>
        <Button>click here</Button>
    </div>
  )
}

export default Hero