import React from 'react'
interface Slide{
  slides:string;
}

const Slider = ({slides}:Slide) => {
  return (
    <section id="#gallery">
      <h2 className="text-5xl font-bold">Gallery</h2>
      <h6>{slides}</h6>
    </section>
  )
}

export default Slider