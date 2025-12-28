import DealOfWeek from "@/components/pages/home/dealOfWeek";
import PopularCategory from "@/components/pages/home/popularCategory";
import Service from "@/components/pages/home/service";
import Slider from "@/components/pages/home/slider";
import OfferCart from "@/components/share/offerCart";

export default function Home() {

  return (
    <>
      <Slider />
      <Service />
      <DealOfWeek />
      <div className="my-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3.5">
        <OfferCart/>
        <OfferCart/>
        <OfferCart/>
      </div>

      <PopularCategory/>
    </>
  )
}
