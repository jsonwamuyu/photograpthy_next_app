import {useState} from 'react';
import { sliderData } from './SliderData';
import Image from 'next/image';
import {FaArrowCircleLeft, FaArrowAltCircleRight, FaArrowCircleRight} from 'react-icons/fa'


const Slider = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const slideLength = slides.length;

  // hundle next slide button
  const nextSlide = () =>{
    setCurrent(current === slideLength - 1 ? 0 : current + 1)
  }
  const prevSlide = () =>{
    setCurrent(current === 0 ? slideLength -1 : current - 1);
  }

  if(!Array.isArray(slides) || slides.length <=0){
    return null;
  }


  return (
    <section id="gallery" className=' m-auto max-w-[1240px]'>
      <h2 className="text-2xl text-center font-bold ">Gallery</h2>
      <div className='relative flex justify-center p-4 max-h-[500px]'>
        {sliderData.map((slide, index) =>{
          return(
            <div key={index} className={index === current 
              ? 'opacity-[1] ease-in duration-1000'  
              : 'opacity-[0]'}>


              <FaArrowCircleLeft onClick={prevSlide}  size={30} className='text-white/70 hover:text-white cursor-pointer z-[2] select-none absolute top-[50%] left-[30px]'/>

              {index === current && (
                <Image height={600} width={1440} className="object-cover h-full" src={slide.image} alt="/" objectFit='cover'/>
              )}
              
              <FaArrowCircleRight onClick={nextSlide}  size={30} className='text-white/70 hover:text-white cursor-pointer z-[2] select-none absolute top-[50%] right-[30px]'/>
            </div>
            
          )})}
        </div>
    </section>
  )
}

export default Slider