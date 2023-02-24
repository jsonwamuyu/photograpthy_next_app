import React from 'react'
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
 
const InstagramImg = ({socialImg}) => {
  return (
    <div className='relative'>
      <Image src={socialImg} alt="Instangram" height={200} width={300} className="rounded-lg w-full h-full"/>
      {/* Overlay div */}
      <div className='flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 hover:bg-black/50 cursor-pointer group'/>
      <p className='text-blue-500 hidden group-hover:block'><FaInstagram size={20}/></p>
    </div>
  )
}

export default InstagramImg