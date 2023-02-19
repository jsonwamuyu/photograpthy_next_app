import React from 'react'

interface HeroDetails{
    heading:string;
    description:string;
}

const Hero = ({heading, description}:HeroDetails) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-center bg-cover bg-img'>
        {/* Overlay */}
        <div />
        <div className='flex flex-col space-y-4'>
            <h2 className='text-5xl font-bold text-white'>{heading}</h2>
            <p className='text-white'>{description}</p>
            <button className='px-[8px] py-[2rem] border'>Button</button>
        </div>
    </div>
  )
}

export default Hero