import React, { useState, useEffect } from 'react'
import CarouselItem from './CarouselItem'
import { projectInfo } from '../data/data'

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = projectInfo.length - 1
    } else if (newIndex >= projectInfo.length) {
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
    <div className="h-max">
      <div className="pt-5">
        {projectInfo.map(({ title, text, technologies, img, link }, idx) => (
          <CarouselItem
            title={title}
            text={text}
            technologies={technologies}
            image={img}
            link={link}
            idx={idx}
            activeIndex={activeIndex}
          />
        ))}
      </div>
      <div className="pt-2 flex justify-center align-items-center">
        <button
          className="bg-gray-darkest text-gray-lightest px-2 rounded py-0.5"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          Previous
        </button>
        {projectInfo.map((index) => {
          return (
            <button
              className={
                activeIndex === index
                  ? 'rounded-full border-gray-darkest border-2 bg-gray-darkest h-4 w-4 mx-2'
                  : 'rounded-full border-gray-darkest border-2 h-4 w-4 mx-2'
              }
              id={index}
            ></button>
          )
        })}
        <button
          className="bg-gray-darkest text-gray-lightest rounded px-2 py-0.5"
          onClick={() => updateIndex(activeIndex + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Carousel
