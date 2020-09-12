import React from 'react'

import image from '../../utils/imageBackground/copaPistao.jpg'

export default function Hero() {
  return (
    <>
      <div className='h-screen relative'>
        <img src={image} alt='copa pistao' className='h-full' />
        <div className='absolute top-half-30 left-half flex flex-col items-center'>
          <h2 className='text-danger-500 text-4xl py-2'>Welcome !</h2>
          <h1 className='text-danger-500 text-6xl py-4 font-semibold'>I'm Light Mcqueen</h1>
          <p className='text-danger-500 text-2xl py-2'>Based on real facts</p>
          <div className=' flex justify-center py-6 w-full'>
            <p className='text-danger-500 font-medium border-solid border-danger-500 border-2 rounded-full p-4 cursor-pointer w-full flex justify-center hover:bg-gray-400'>
              Click me
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
