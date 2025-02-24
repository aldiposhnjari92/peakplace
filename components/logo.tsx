import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-0'>
        <Image src={'logo-dark.svg'} alt='logo' height={35} width={35} />
        <h1 className='text-xl uppercase'>
          <span className='font-[700]'>Peak</span>
          <span className='font-[300]'>PLace</span>
          </h1>
    </div>
  )
}

export default Logo