import { Search } from "lucide-react";
import Image from "next/image";

const searchData = [
    {
        id: "1",
        title: "Title number one",
        image: "/vercel.svg",
        rating: 3,
        price: 190
    },
    {
        id: "2",
        title: "Title number one",
        image: "/vercel.svg",
        rating: 4,
        price: 220
    },
    {
        id: "3",
        title: "Title number one",
        image: "/vercel.svg",
        rating: 3,
        price: 360
    },
    {
        id: "4",
        title: "Title number one",
        image: "/vercel.svg",
        rating: 2,
        price: 110
    },
]

function ProductSearchForm() {
    return (
        <div className="px-6 flex-1">
            <div className="relative">
                <input className="border w-full p-2" type="text" />
                <button className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer hover:text-primary">
                    <Search />
                </button>
            <div className="absolute top-full left-0 w-full h-64 overflow-y-scroll border">
                <div>
                    <div>

                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ProductSearchForm;