import DealOfWeek from "@/components/pages/home/dealOfWeek";
import PopularCategorySlider from "@/components/pages/home/popularCategorySlider";
import Service from "@/components/pages/home/service";
import Slider from "@/components/pages/home/slider";

export default function Home() {

  return (
    <>
      <Slider />
      <Service />
      <DealOfWeek />
      <PopularCategorySlider />
    </>
  )
}
