import DealOfWeek from "@/components/pages/home/dealOfWeek";
import PopularCategorySlider from "@/components/pages/home/popularCategorySlider";
import Service from "@/components/pages/home/service";
import Slider from "@/components/pages/home/slider";
import OfferCart from "@/components/share/offerCart";

export default function Home() {

  return (
    <>
      <Slider />
      <Service />
      <DealOfWeek />
      <PopularCategorySlider />
      <div className="my-container mx-auto flex justify-between gap-x-4">
        <OfferCart/>
        <OfferCart/>
        <OfferCart/>
      </div>
    </>
  )
}
