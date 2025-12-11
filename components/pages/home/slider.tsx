import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function Slider() {
  return (
    <div className="my-container">
      <Carousel className="w-full mt-10">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-96 rounded overflow-hidden">
                <Image
                  src="/slide.png"
                  alt="slide image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
