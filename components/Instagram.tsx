import React from 'react'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <section className='flex p-4 py-24 text-center max-w-[1240px] m-auto flex-col items-center justify-center'>
        <p className="text-2xl font-bold">Follow Me on Instagram</p>
        <p className='text-md text-gray-500 pb-4'>@Capture</p>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            <InstagramImg socialImg='/images/shoes.png'/>
            <InstagramImg socialImg='/images/greens.jpg'/>
            <InstagramImg socialImg='/images/plate.jpg'/>
            <InstagramImg socialImg='/images/shoes.png'/>
            <InstagramImg socialImg='/images/shoes.png'/>
            <InstagramImg socialImg='/images/food.jpg'/>
        </div>
    </section>
  )
}

export default Instagram