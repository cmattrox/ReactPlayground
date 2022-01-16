import React, { useState } from 'react'
import '../css/carousel.css'

const CarouselItem = ({ title, text, technologies, image, width }) => {
  return (
    <div
      className="carousel-item grid grid-cols-3 bg-gray-light text-gray-darkest border-4 border-gray-darkest rounded"
      style={{ width: width }}
    >
      <div className="flex m-4 col-span-1">
        <img src={image} className="h-60 rounded" />
        <div className="pl-4">
          <h1 className="font-semibold text-4xl">{title}</h1>
          <p className="text-xl">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
