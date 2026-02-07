import ProductFilterTop from "@/components/pages/shop/productFilterTop";
import PageBreadCrumb from "@/components/share/pageBreadCrumb";
import { IBreadCrumb } from "@/type/type";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const page: IBreadCrumb[] = [
    {
        label: "Shop",
        href: "/shop"
    },
    {
        label: "Contact",
        href: "/contact"
    },
    {
        label: "Test",
        href: "/test"
    }
]

async function ShopPage({searchParams}: {searchParams: Promise<{filter: string}>}) {

    const {filter}= await searchParams;
    return ( 
       <>
        <div className="my-container mx-auto">
          <PageBreadCrumb pages={page}/>
          <ProductFilterTop />

          <div className="grid grid-cols-4">
            <div className="col-span-1">
                <div className="bg-white p-4">
                    <h3 className="font-semibold text-xl border-b-2 pb-2">Shop Categories</h3>
                    <ul className="mt-4 space-y-2 text-black/70">
                        <li>
                            <Link className="flex items-center hover:text-primary" href={{pathname:"/shop", query: {category: "Women Clothing"}}}><ChevronRight size={16}/> Women Clothing</Link>
                        </li> 
                        <li>
                            <Link className="flex items-center hover:text-primary" href={{pathname:"/shop", query: {category: "Men Clothing"}}}><ChevronRight size={16}/> Men Clothing</Link>
                        </li>
                        <li>
                            <Link className="flex items-center hover:text-primary" href={{pathname:"/shop", query: {category: "Electronics"}}}><ChevronRight size={16}/> Electronics</Link>
                        </li>
                        <li>
                            <Link className="flex items-center hover:text-primary" href={{pathname:"/shop", query: {category: "Vehicles & Accessories"}}}><ChevronRight size={16}/> Vehicles & Accessories</Link>
                        </li>
                        <li>
                            <Link className="flex items-center hover:text-primary" href={{pathname:"/shop", query: {category: "Beauty & Personal Care"}}}><ChevronRight size={16}/> Beauty & Personal Care</Link>
                        </li>
                        <li>
                            <Link className="flex items-center hover:text-primary" href={{pathname:"/shop", query: {category: "Sports & Entertainment"}}}><ChevronRight size={16}/> Sports & Entertainment</Link>
                        </li>
                        <li>
                            <Link className="flex items-center hover:text-primary" href={{pathname:"/shop", query: {category: "Home & Garden"}}}><ChevronRight size={16}/> Home & Garden</Link>
                        </li>
                        <li>
                            <Link className="flex items-center hover:text-primary" href={{pathname:"/shop", query: {category: "Medicine & Health Care"}}}><ChevronRight size={16}/> Medicine & Health Care</Link>
                        </li>
                    </ul>
                </div>
            </div>
                <div></div>
          </div>
        </div>
        </>
     );
}

export default ShopPage;