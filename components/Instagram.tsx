import React from 'react'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <section className='flex p-4 max-w-[1240px] m-auto flex-col items-center justify-center'>
        <p className="text-xl text-center font-semibold">Follow Me on Instagram</p>
        <p className='text-md text-gray-500'>@Capture</p>
        <div className='mt-6 flex flex-col sm:flex-row flex-wrap space-x-4'>
            <InstagramImg socialImg='/images/shoes.png'/>
            <InstagramImg socialImg='/images/shoes.png'/>
            <InstagramImg socialImg='/images/shoes.png'/>
            <InstagramImg socialImg='/images/shoes.png'/>
            {/* <InstagramImg socialImg='/images/shoes.png'/> */}
        </div>
    </section>
  )
}

export default Instagram