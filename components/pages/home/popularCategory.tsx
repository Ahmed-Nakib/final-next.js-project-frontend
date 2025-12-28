'use client'
import PopularCategorySlider from "@/components/pages/home/popularCategorySlider"
import { useEffect, useState } from "react"
type ICategories = {
    id: string;
    title: string
}
const categories: ICategories[] = [
    {
        id: "1",
        title: "Women Clothing"
    },
    {
        id: "2",
        title: "Men Clothing"
    },
    {
        id: "3",
        title: "Electronics"
    },
    {
        id: "4",
        title: "Beauty & Personal Care"
    },
]
const PopularCategory = () => {

    const [categoryId, setCategoryId]= useState<string>(categories[0]?.id);


  return (
    <>
       <div className="my-container">
            <div className="flex flex-col md:flex-row items-start md:items-center border-b-2 border-gray-200">
                <h2 className="text-2xl font-semibold py-2">
                    <span className="border-b-2 border-primary  -mb-0.5 py-2">Popular Category</span>
                </h2>

                <div className='md:ml-auto'>
                    <div className='flex flex-wrap justify-center gap-x-5 -mb-2.5'>
                        {
                          categories.map((cat) => (
                              <button
                               key={cat.id}
                               onClick={() => setCategoryId(cat.id)}
                               className={
                                `py-2 font-semibold border-b-2 transition ${
                                    categoryId === cat.id
                                    ? "text-primary border-primary"
                                    : "text-black/70 border-transparent hover:text-primary hover:border-primary"
                                }`
                               }>
                                {cat.title}
                              </button>
                          ))  
                        }
                    </div>
                </div>
            </div>
        </div>
        <PopularCategorySlider categoryId={categoryId}/>
    </>
  )
}

export default PopularCategory
