import React from 'react'

import image from '../../utils/imageBackground/music.jpg'

export default function Hero() {
  return (
    <>
      <div className='h-screen relative'>
        <img src={image} alt=' music guy' className='h-full' />

        <div className='absolute top-half-10 px-56'>
          <h1 className='text-gray-200 text-8xl font-bold py-2 border-b border-solid border-gray-200'>Music</h1>
          <h2 className='text-gray-200 text-3xl font-semibold py-6'>Happines and safe</h2>
          <h2 className='text-gray-200 text-3xl font-semibold py-6'>Safe and Sound</h2>
          <h2 className='text-gray-200 text-3xl font-semibold py-6'>Blind by the ligths</h2>
        </div>
      </div>
    </>
  )
}
