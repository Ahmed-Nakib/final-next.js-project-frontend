
import PopularItemSlider from '@/components/pages/home/popularItemSlider'
import CountDown from '@/components/share/countDown'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function DealOfWeek() {
    return (
        <>
        <div className="my-container">
            <div className="flex flex-col md:flex-row gap-2.5 justify-center items-center border-b-2 border-gray-200">
                <h2 className="text-2xl font-semibold py-2">
                    <span className="border-b-2 border-primary -block mb-0.5 py-2">Deals Of The Week</span>
                </h2>

                <div className="flex gap-2.5 ml-auto pr-5">
                <div>
                    <CountDown variation="rounded" targetDate={new Date(2025, 11, 15, 9, 0, 0)} />

                </div>
                <Link href={"/"} className="text-sm flex justify-center items-center gap-x-1">
                    <span className='block'>View All </span>
                    <ChevronRight size={14} />
                </Link>
                </div> 
            </div>
        </div>

        <PopularItemSlider />
        </>
    )
}
