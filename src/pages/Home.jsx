import React from 'react'

import Header from '../Components/Header'
import Hero from '../Components/Hero'

import Header2 from '../Components/Hero2/Header'
import Hero2 from '../Components/Hero2/Hero'

import Hero3 from '../Components/Hero3/Hero'
import Hero4 from '../Components/Hero4/Hero'

export default function Home() {
  return (
    <>
      <div className='min-h-screen bg-black  border-solid border-t-4 border-danger-700 px-24'>
        <Header />
        <Hero />
      </div>
      <div className='min-h-screen bg-gray-900  border-solid border-t-4 border-primary-800 pl-12'>
        <div className='flex '>
          <Header2 />
          <Hero2 />
        </div>
      </div>
      <div className='min-h-screen bg-gray-900  border-solid border-t-4 border-primary-800'>
        <Hero3 />
      </div>
      <div className='min-h-screen border-solid border-t-4 border-primary-800'>
        <Hero4 />
      </div>
    </>
  )
}
