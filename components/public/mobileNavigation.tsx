
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import { useNavigationStore } from "@/store/navigation.store"
import { useEffect } from "react";

const categoriesData = [
  {
    id: "1",
    title: "Women clothing",
    link: "/category/women",
    image: "/images/women.jpg",
    isActive: false,
    children: [
      {
        id: "1-1",
        title: "Outerwear & Jackets",
        link: "/category/women/outerwear-jackets",
        image: "/images/women-outerwear.jpg",
        isActive: true,
        children: [
          {
            id: "1-1-1",
            title: "Winter Jackets",
            link: "/category/women/outerwear-jackets/winter",
            image: "/images/women-winter.jpg",
            isActive: true,
            children: [
              {
                id: "1-1-1-1",
                title: "Puffer Jackets",
                link: "/category/women/outerwear-jackets/winter/puffer",
                image: "/images/puffer.jpg",
                isActive: true,
                children: []
              },
              {
                id: "1-1-1-2",
                title: "Wool Coats",
                link: "/category/women/outerwear-jackets/winter/wool-coats",
                image: "/images/wool.jpg",
                isActive: true,
                children: []
              }
            ]
          },
          {
            id: "1-1-2",
            title: "Light Jackets",
            link: "/category/women/outerwear-jackets/light",
            image: "/images/light-jackets.jpg",
            isActive: true,
            children: [
              {
                id: "1-1-2-1",
                title: "Denim Jackets",
                link: "/category/women/outerwear-jackets/light/denim",
                image: "/images/denim.jpg",
                isActive: true,
                children: []
              },
              {
                id: "1-1-2-2",
                title: "Bomber Jackets",
                link: "/category/women/outerwear-jackets/light/bomber",
                image: "/images/bomber.jpg",
                isActive: true,
                children: []
              }
            ]
          }
        ]
      },
      {
        id: "1-2",
        title: "Bottoms",
        link: "/category/women/bottoms",
        image: "/images/women-bottoms.jpg",
        isActive: true,
        children: [
          {
            id: "1-2-1",
            title: "Jeans",
            link: "/category/women/bottoms/jeans",
            image: "/images/jeans.jpg",
            isActive: true,
            children: [
              {
                id: "1-2-1-1",
                title: "Skinny Jeans",
                link: "/category/women/bottoms/jeans/skinny",
                image: "/images/skinny.jpg",
                isActive: true,
                children: []
              },
              {
                id: "1-2-1-2",
                title: "Wide Leg Jeans",
                link: "/category/women/bottoms/jeans/wide-leg",
                image: "/images/wide-leg.jpg",
                isActive: true,
                children: []
              }
            ]
          },
          {
            id: "1-2-2",
            title: "Skirts",
            link: "/category/women/bottoms/skirts",
            image: "/images/skirts.jpg",
            isActive: true,
            children: []
          }
        ]
      },
      {
        id: "1-3",
        title: "Underwear",
        link: "/category/women/underwear",
        image: "/images/women-underwear.jpg",
        isActive: true,
        children: [
          {
            id: "1-3-1",
            title: "Bras",
            link: "/category/women/underwear/bras",
            image: "/images/bras.jpg",
            isActive: true,
            children: []
          },
          {
            id: "1-3-2",
            title: "Panties",
            link: "/category/women/underwear/panties",
            image: "/images/panties.jpg",
            isActive: true,
            children: []
          }
        ]
      },
      {
        id: "1-4",
        title: "Accessories",
        link: "/category/women/accessories",
        image: "/images/women-accessories.jpg",
        isActive: true,
        children: [
          {
            id: "1-4-1",
            title: "Bags",
            link: "/category/women/accessories/bags",
            image: "/images/bags.jpg",
            isActive: true,
            children: [
              {
                id: "1-4-1-1",
                title: "Handbags",
                link: "/category/women/accessories/bags/handbags",
                image: "/images/handbags.jpg",
                isActive: true,
                children: []
              }
            ]
          },
          {
            id: "1-4-2",
            title: "Jewelry",
            link: "/category/women/accessories/jewelry",
            image: "/images/jewelry.jpg",
            isActive: true,
            children: []
          }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Men clothing",
    link: "/category/men",
    image: "/images/men.jpg",
    isActive: false,
    children: [
      {
        id: "2-1",
        title: "Outerwear & Jackets",
        link: "/category/men/outerwear-jackets",
        image: "/images/men-outerwear.jpg",
        isActive: true,
        children: [
          { id: "2-1-1", title: "Outerwear", link: "/category/men/outerwear-jackets/outerwear", image: "/images/outerwear.jpg", isActive: true, children: [] },
          { id: "2-1-2", title: "Bottoms", link: "/category/men/outerwear-jackets/bottoms", image: "/images/bottoms.jpg", isActive: true, children: [] },
          { id: "2-1-3", title: "Underwear", link: "/category/men/outerwear-jackets/underwear", image: "/images/underwear.jpg", isActive: true, children: [] },
          { id: "2-1-4", title: "Accessories", link: "/category/men/outerwear-jackets/accessories", image: "/images/accessories.jpg", isActive: true, children: [] }
        ]
      },
      { id: "2-2", title: "Bottoms", link: "/category/men/bottoms", image: "/images/men-bottoms.jpg", isActive: true, children: [] },
      { id: "2-3", title: "Underwear", link: "/category/men/underwear", image: "/images/men-underwear.jpg", isActive: true, children: [] },
      { id: "2-4", title: "Accessories", link: "/category/men/accessories", image: "/images/men-accessories.jpg", isActive: true, children: [] }
    ]
  },
  { id: "3", title: "Children", link: "/category/children", image: "/images/children.jpg", isActive: true, children: [] },
  { id: "4", title: "Electronics", link: "/category/electronics", image: "/images/electronics.jpg", isActive: true, children: [] }
];



const MobileNavigation = () => {
    const {isActive, updateActive, categories, updateCategories} = useNavigationStore();   
    
    useEffect(() =>{
        updateCategories(categoriesData)
    },
    [updateCategories]
    )

    const updateCategory = (id : string) => {
            const updateCategoriesData = categories.map((cat) => {
                if(id == cat.id) {
                    return{
                        ...cat,
                        isActive : !cat.isActive
                    }
                }else{
                    return cat
                }
            })
            updateCategories(updateCategoriesData)
    }
    
  return (
   <>
   {
    isActive && 
     <div className="w-[260px] shadow-xl fixed top-0 left-0 h-screen z-3 bg-white lg:hidden">
                <div className="bg-primary h-10 flex items-center justify-between ">
                    <h2 className="text-white pl-2 text-xl">Navigation</h2>
                    <X onClick={() => updateActive(false)} className="mr-2 text-white cursor-pointer"/>
                </div>
                <div>
                    <Tabs defaultValue="menu" className="w-full">
                        <TabsList className="w-full rounded-none">
                            <TabsTrigger className="rounded-[5px]" value="menu">Menu</TabsTrigger>
                            <TabsTrigger className="rounded-[5px]" value="category">Category</TabsTrigger>
                        </TabsList>
                        <TabsContent value="menu">
                            <div>
                                <ul className="pl-5 ">
                                    <li>
                                        <Link className="flex pr-3 items-center hover:text-primary" href={"/"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link className="flex pr-3 items-center hover:text-primary" href={"/"}>Shop</Link>
                                    </li>
                                    <li>
                                        <Link className="flex pr-3 items-center hover:text-primary" href={"/"}>Campaign</Link>
                                    </li>
                                    <li>
                                        <Link className="flex pr-3 items-center hover:text-primary" href={"/"}>Blog</Link>
                                    </li>
                                    <li>
                                        <Link className="flex pr-3 items-center hover:text-primary" href={"/"}>
                                            Page
                                            <ChevronDown className="w-4 mt-1.5" />
                                        </Link>

                                        <ul className="bg-white p-3 shadow-lg border-t-3 border-t-primary mr-4 mb-2">
                                            <li>
                                                <Link className="flex items-center gap-x-0.5 hover:text-primary" href={"/"}><ChevronRight width={20} />About us</Link>
                                            </li>
                                            <li>
                                                <Link className="flex items-center gap-x-0.5 hover:text-primary" href={"/"}><ChevronRight width={20} />About us</Link>
                                            </li>
                                            <li>
                                                <Link className="flex items-center gap-x-0.5 hover:text-primary" href={"/"}><ChevronRight width={20} />About us</Link>
                                            </li>
                                            <li>
                                                <Link className="flex items-center gap-x-0.5 hover:text-primary" href={"/"}><ChevronRight width={20} />About us</Link>
                                            </li>
                                            <li>
                                                <Link className="flex items-center gap-x-0.5 hover:text-primary" href={"/"}><ChevronRight width={20} />About us</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="flex pr-3 items-center hover:text-primary" href={"/"}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="category">
                            <div className="p-3 overflow-y-scroll h-[calc(100vh-100px)]">
                                <ul>
                                    {
                                        categories.map((data) => (
                                               <li key={data.id} className="flex flex-wrap justify-between group my-1">
                                                <Link className="flex group-hover:text-primary" href={"/"}><ChevronRight width={20} />{data.title}</Link>
                                                 {
                                                    data.children.length > 0 && 
                                                   <>
                                                    <span onClick={() => updateCategory(data.id)} className="w-6 h-6 bg-gray-200 flex justify-center items-center hover:bg-primary cursor-pointer">
                                                      <ChevronDown  className="group-hover:text-primary hover:text-white" size={20} />
                                                    </span>
                                                    {
                                                        data.isActive && 
                                                 <ul className="w-full border-l ml-5 pl-4">
                                                    {
                                                     data.children.map((data1) => (
                                                         <li key={data1.id} className="my-1 relative before:absolute before:w-2 before:border-t before:-left-4 before:opacity-40 before:top-3.5">
                                                              <Link className="hover:text-primary" href={"/"}>{data1.title}</Link>
                                                              <ul className="w-full border-l pl-4">
                                                                {
                                                                    data1.children.map((data2) => (
                                                                        <li key={data2.id} className="my-1 relative before:absolute before:w-2 before:border-t before:-left-4 before:opacity-40 before:top-3.5">
                                                                             <Link className="hover:text-primary" href={"/"}>{data2.title}</Link>
                                                                                             <ul className="w-full border-l pl-4">
                                                                                               {
                                                                                           data2.children.map((data3) => (
                                                                                              <li key={data3.id} className="my-1 relative before:absolute before:w-2 before:border-t before:-left-4 before:opacity-40 before:top-3.5">
                                                                                                 <Link className="hover:text-primary" href={"/"}>{data3.title}</Link>
                                                                                                  <ul className="w-full border-l pl-4">
                                                                                                         {
                                                                                                           data3.children.map((data4) => (
                                                                                                            <li key={data4.id} className="my-1 relative before:absolute before:w-2 before:border-t before:-left-4 before:opacity-40 before:top-3.5">
                                                                                                             <Link className="hover:text-primary" href={"/"}>{data4.title}</Link>
                                                                                                             </li>
                                                                                                             ))
                                                                                                          }
                                                                                                 </ul>
                                                                                             </li>
                                                                                           ))
                                                                                      }
                                                                              </ul>
                                                                        </li>
                                                                    ))
                                                                }
                                                              </ul>
                                                         </li>
                                                     ))
                                                    }
                                                 </ul>
                                                    }
                                                   </>
                                                 }
                                              </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
   }
   </>
  )
}

export default MobileNavigation
