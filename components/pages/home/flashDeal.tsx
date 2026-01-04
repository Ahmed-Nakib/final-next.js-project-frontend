import FlashDealItem from '@/components/share/flashDealItem'
import React from 'react'

const FlashDeal = () => {
  return (
    <>
       <div className="my-container mt-12">
            <div className="flex flex-col md:flex-row items-start md:items-center border-b-2 border-gray-200">
                <h2 className="text-2xl font-semibold py-2">
                    <span className="border-b-2 border-primary  -mb-0.5 py-2">Flash Deal</span>
                </h2>

           
            </div>
        </div>
        <div className='grid md:grid-cols-2 gap-6 my-container'>
          <FlashDealItem/>
          <FlashDealItem/>
        </div>
    </>
  )
}

export default FlashDeal
