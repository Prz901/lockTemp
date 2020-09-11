import React from 'react'

import image from '../utils/imageBackground/lion.jpg'

export default function Home() {
  return (
    <div className='h-screen bg-black w-full border-solid border-t-4 border-danger-700'>
      <div className=' container mx-auto'>
        <div className='flex items-center justify-between mt-8'>
          <div className='text-white'>
            <h1 className='text-3xl'>Security lock</h1>
          </div>
          <div className='flex items-center text-white text-xl '>
            <p className='ml-6 cursor-pointer hover:text-danger-600'>Lorem</p>
            <p className='ml-6 cursor-pointer hover:text-danger-600'>Lorem</p>
            <p className='ml-6 cursor-pointer hover:text-danger-600'>Lorem</p>
            <p className='ml-6 cursor-pointer hover:text-danger-600'>Lorem</p>
          </div>
        </div>
      </div>
      {/* dentro de um container se pa flex end */}
      <img src={image} alt='Lion' className='absolute bottom-0 left-0 opacity-25' />
      <div className='flex justify-end items-center container mx-auto'>
        <div className='flex flex-col items-start '>
          <div className=''>
            <p className='text-white font-medium text-5xl'>
              <i className='fas fa-lock text-white  locked hover:text-danger-500 mr-4' />
              Security Lock
            </p>
          </div>
          <div className='mt-4'>
            <h2 className='text-white text-2xl border-danger-500 border-l-2'>
              You live free and we care about your things<span className='text-danger-500 text-2xl'>Your Security</span>
            </h2>
          </div>
          {/* <i className="fas fa-lock-open text-white cursor-pointer unlocked"/> */}
          <div className='flex flex-row items-center text-white mt-6'>
            <p className='text-lg cursor-pointer hover:text-danger-500'>About Us</p>
            <p className='ml-4 text-lg cursor-pointer hover:text-danger-500'>Products</p>
            <p className='ml-4 text-lg cursor-pointer hover:text-danger-500'>Team</p>
            <p className='ml-4 text-lg cursor-pointer hover:text-danger-500'>Lorem</p>
          </div>
          <div className='flex items-center flex-row mt-4 text-4xl'>
            <p className='text-white bg-gray-600 rounded-lg hover:bg-danger-600 cursor-pointer'>About Us</p>
            <div className=''>
              <i className='text-white  fab fa-linkedin cursor-pointer hover:text-danger-700' />
            </div>
            <div className='ml-4'>
              <i className='text-white  fab fa-instagram cursor-pointer  hover:text-danger-700' />
            </div>
            <div className='ml-4'>
              <i class='fab fa-facebook text-white  cursor-pointer hover:text-danger-700'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
