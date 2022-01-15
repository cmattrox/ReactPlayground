import React, { useState, useEffect } from 'react'
import '../css/carousel.css'

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 5000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="carousel"
    >
      <div
        className="inner pt-5"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' })
        })}
      </div>
      <div className="indicators pt-2">
        <button
          className="bg-gray-darkest text-gray-lightest px-2 rounded"
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
        >
          Previous
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${
                index === activeIndex ? 'bg-gray-darkest' : 'bg-gray-lightest'
              } rounded-full h-4 w-4 border-gray-darkest border-2 mx-1 mt-1`}
              onClick={() => {
                updateIndex(index)
              }}
            ></button>
          )
        })}
        <button
          className="bg-gray-darkest text-gray-lightest rounded px-2"
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Carousel
