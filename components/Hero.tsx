import React from 'react'

interface HeroDetails{
    heading:string;
    description:string;
}

const Hero = ({heading, description}:HeroDetails) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-img'>
        {/* Overlay */}
        <div className='bg-black/70 absolute top-0 left-0 right-0 bottom-0 z-[2]'/>
        <div className='p-5 text-white z-[2] -ml-[10rem] -mt-[10rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='text-xl py-5'>{description}</p>
            <button className='px-8 py-2 border hover:bg-white hover:text-black duration-300 ease-in-out text-white rounded-[2px] items-center justify-center flex text-[18px]'>Button</button>
        </div>
    </div>
  )
}

export default Hero