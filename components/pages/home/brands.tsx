import ProductCart from '@/components/share/productCart'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <>
     <div className="my-container mt-12">
            <div className="flex flex-col md:flex-row items-start md:items-center border-b-2 border-gray-200">
                <h2 className="text-2xl font-semibold py-2">
                    <span className="border-b-2 border-primary  -mb-0.5 py-2">Popular Brands</span>
                </h2>
            </div>
        </div>
        <div className="my-container py-8">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                            <div className='p-8 bg-white flex justify-center items-center rounded-lg border border-transparent hover:border-primary'>
                                <Image
                                src="https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/1632336527add.png"
                                alt="Brand"
                                width={200}
                                height={100}
                                className="w-full h-24 object-contain"
                            />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 -left-4" />
                <CarouselNext className="absolute top-1/2 -right-4" />
            </Carousel>
        </div>
    </>
  )
}

export default Brands
