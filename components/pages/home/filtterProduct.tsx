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
const FlitterProduct = () => {

    const [categoryId, setCategoryId]= useState<string>(categories[0]?.id);


  return (
    <>
       <div className="my-container">
            <div className="flex flex-col md:flex-row items-start md:items-centers">
                

                <div className='w-full'>
                    <div className='flex flex-wrap md:justify-start justify-center gap-x-5 -mb-2.5'>
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

export default FlitterProduct
