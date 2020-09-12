import React from 'react'

import image from '../utils/imageBackground/lion.jpg'

export default function Hero() {
  return (
    <>
      <img src={image} alt='Lion' className='absolute bottom-0 left-0 opacity-25 z-0' />
      <div className='md:flex justify-end hidden relative z-10 items-center h-full mt-20'>
        <div className=''>
          <p className='text-white font-medium text-6xl par'>
            Security Lock
            <i className='fas fa-lock text-white hover:text-danger-500 ml-6' />
          </p>
          <div className='py-10 '>
            <div className=' border-danger-500 border-l-4'>
              <h2 className='text-white text-2xl ml-2 opacity-75'>
                You live free and we care about your things <br />
                <span className='text-danger-500 text-4xl'>Your Security</span>
              </h2>
            </div>
          </div>
          <div className='flex flex-col items-start py-6 justify-start '>
            <p className='text-white bg-danger-500 hover:bg-danger-600 cursor-pointer font-semibold p-3 flex justify-around items-center rounded-lg text-2xl w-1/2 '>
              About Us
              <i className='fas fa-unlock-alt' />
            </p>
            <div className='flex flex-col items-start'>
              <h3 className='text-white py-6 text-2xl opacity-50'>Conect with us:</h3>
              <div className='flex items-start justify-between'>
                <i className='text-white  fab fa-linkedin cursor-pointer hover:text-danger-600 text-5xl' />
                <div className='ml-8'>
                  <i className='text-white  fab fa-instagram cursor-pointer  hover:text-danger-600 text-5xl' />
                </div>
                <div className='ml-8'>
                  <i class='fab fa-facebook text-white  cursor-pointer hover:text-danger-600 text-5xl'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
