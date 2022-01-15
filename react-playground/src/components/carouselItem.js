import React, { useState } from 'react'
import '../css/carousel.css'

const CarouselItem = ({ children, width }) => {
  return (
    <div
      className="carousel-item bg-gray-light text-gray-darkest border-4 border-gray-darkest rounded"
      style={{ width: width }}
    >
      {children}
    </div>
  )
}

export default CarouselItem
