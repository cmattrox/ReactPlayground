import React, { useState } from 'react'

const CarouselItem = ({
  title,
  text,
  technologies,
  image,
  link,
  idx,
  activeIndex,
}) => {
  return (
    <div
      className={
        activeIndex !== idx
          ? 'hidden'
          : 'bg-gray-light text-gray-darkest mx-2 border-4 border-gray-darkest rounded'
      }
      id={idx}
    >
      <div className="lg:flex m-4 pb-5 border-b-2 border-gray-darkest">
        <img src={image} className="h-30 md:h-60 rounded" />
        <div className="pl-4">
          <h1 className="font-semibold text-4xl">{title}</h1>
          <p className="text-xl">{text}</p>
        </div>
      </div>
      <div className="flex flex-col text-xl ml-4 pb-2 border-b-2 border-gray-darkest m-4">
        <ul className="list-disc list-inside">
          <div className="font-semibold"> Technologies Used:</div>
          <br />
          {technologies.map(({ title }, idx) => (
            <div id={idx} className="float-left">
              <li className="px-12">{title}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="m-4 text-xl flex">
        <p className="font-semibold">Link to Github:</p>
        <a href={link} className="underline cursor-pointer pl-2">
          {link}
        </a>
      </div>
    </div>
  )
}

export default CarouselItem
