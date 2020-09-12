import React from 'react'

import image from '../../utils/imageBackground/Aladdin.jpg'

import Header from './Header'

export default function Hero() {
  return (
    <>
      <div className='relative '>
        <img src={image} alt='aladdin' className='h-screen z-0' />
        <div className='absolute top-0 left-0 w-full'>
          <Header />
        </div>
        <div className='absolute top-half left-half z-10'></div>
      </div>
    </>
  )
}
