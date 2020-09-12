import React from 'react'

export default function Header() {
  return (
    <>
      <div className='py-12 px-20 w-full'>
        <div className='flex justify-between w-full '>
          <div className='text-gray-400 flex items-center text-4xl cursor-pointer'>
            <i className='fas fa-compact-disc text-danger-600 px-3' />
            <h1 className='font-bold'>Aladdin</h1>
          </div>
          <div className='text-gray-400 flex items-center justify-between w-1/3 px-8'>
            <div className='flex items-center justify-between w-1/2 px-6 text-xl '>
              <h2 className='cursor-pointer hover:text-gray-300'>Demos</h2>
              <h2 className='cursor-pointer hover:text-gray-300'>Inner Pages</h2>
            </div>
            <div>
              <p className='bg-danger-500 p-8 rounded-md cursor-pointer hover:text-gray-300'>Purchase Now</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
