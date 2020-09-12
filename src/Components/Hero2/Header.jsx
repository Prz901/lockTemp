import React from 'react'

import image from '../../utils/imageBackground/marquinhos.jpg'

export default function Header() {
  return (
    <>
      <div className='flex flex-col items-start w-1/5 h-screen'>
        <div className='flex flex-col items-center h-full'>
          <div className='flex flex-col items-center py-20'>
            <img src={image} alt='ktchau' className='w-1/2 rounded-full border-gray-600 border-solid border-4' />
            <h1 className='py-4 text-gray-400 text-lg'>Relampago Marquinhos</h1>
          </div>
          <div className='flex flex-col items-start py-4'>
            <p className='py-2 text-gray-400 text-2xl cursor-pointer hover:text-danger-600'>Home</p>
            <p className='py-2 text-gray-400 text-2xl cursor-pointer hover:text-danger-600'>About Me</p>
            <p className='py-2 text-gray-400 text-2xl cursor-pointer hover:text-danger-600'>What I do</p>
            <p className='py-2 text-gray-400 text-2xl cursor-pointer hover:text-danger-600'>Resume</p>
            <p className='py-2 text-gray-400 text-2xl cursor-pointer hover:text-danger-600'>Portfolio</p>
            <p className='py-2 text-gray-400 text-2xl cursor-pointer hover:text-danger-600'>Testimonial</p>
            <p className='py-2 text-gray-400 text-2xl cursor-pointer hover:text-danger-600'>Contact</p>
          </div>
          <div className='flex flex-row items-end justify-end h-full'>
            <i className='fab fa-facebook text-3xl text-gray-400 px-1 hover:text-danger-600 cursor-pointer' />
            <i className='fab fa-twitter text-3xl text-gray-400 px-1 hover:text-danger-600 cursor-pointer' />
            <i className='fab fa-discord text-3xl text-gray-400 px-1 hover:text-danger-600 cursor-pointer' />
            <i className='fab fa-github text-3xl text-gray-400 px-1 hover:text-danger-600 cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  )
}
