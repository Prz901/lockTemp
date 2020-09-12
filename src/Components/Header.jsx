import React from 'react'

export default function Header() {
  return (
    <div className='flex items-start justify-between py-6 z-10'>
      <div className='text-white'>
        <h1 className='text-3xl par'>Security lock</h1>
      </div>
      <div className='flex items-center text-white text-xl'>
        <p className='mr-16 cursor-pointer hover:text-danger-600'>Home</p>
        <p className='mr-16 cursor-pointer hover:text-danger-600'>Sobre</p>
        <p className='mr-16 cursor-pointer hover:text-danger-600'>Contatos</p>
        <p className='cursor-pointer hover:text-danger-600'>Saiba Mais</p>
      </div>
    </div>
  )
}
