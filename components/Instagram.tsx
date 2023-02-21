import React from 'react'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <section className='flex p-4 max-w-[1240px] m-auto flex-col'>
        <p>Follow Me on Instagram</p>
        <p>@_apture</p>
        <div>
            <InstagramImg />
        </div>
    </section>
  )
}

export default Instagram