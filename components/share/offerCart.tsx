import Image from 'next/image'
import React from 'react'

const OfferCart = () => {
  return (
    <div className='p-2.5 flex justify-between overflow-hidden cursor-pointer bg-white w-full border hover:border-primary rounded-md'> 
      <div className='flex flex-col justify-center pl-4'>
        <span className='text-xl text-primary'>50% OFF</span>
        <span className='text-2xl'>Watch</span>
      </div>
      <div>
        <Image
          src="/offer.jpg"
          alt="Offer"
          width={150}
          height={100}
          className='transition-transform duration-500 ease-out hover:scale-125'
        />
      </div>
    </div>
  )
}

export default OfferCart
