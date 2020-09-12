import React from 'react'

import Header from '../Components/Header'
import Hero from '../Components/Hero'

export default function Home() {
  return (
    <div className='min-h-screen bg-black  border-solid border-t-4 border-danger-700 px-24'>
      <Header />
      <Hero />
    </div>
  )
}
