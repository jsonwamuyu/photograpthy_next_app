// import React from 'react'
// import Image from 'next/image';
// import { FaInstagram } from 'react-icons/fa';
 
// const InstagramImg = ({socialImg}:{socialImg:string}) => {
//   return (
//     <div className='relative'>
//       <Image src={socialImg} alt="Instangram" height={200} width={250} className="rounded-lg w-full h-full hover:rounded-lg"/>
//       {/* Overlay div */}
//       <div className='flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 hover:bg-black/50 cursor-pointer group'>
//       <p className='text-gray-300 hidden group-hover:block'><FaInstagram size={30}/></p>
//       </div>
//     </div>
//   )
// }

// export default InstagramImg

import Image from "next/image";
import {FaInstagram} from 'react-icons/fa'


const InstagramImg = ({socialImg} : {socialImg:string}) =>{
  return(
    <div className="relative">
      <Image src={socialImg} alt="instagram" height={200} width={250} className="w-full h-full rounded-lg"/>
      <div className="rounded-lg top-0 bottom-0 left-0 right-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block"><FaInstagram size={30} className="z-10"/></p>
      </div>
    </div>
  )
}

export default InstagramImg;