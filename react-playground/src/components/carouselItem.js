import React, { useState } from 'react'
import '../css/carousel.css'

const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  )
}

export default CarouselItem
