import ProductCart from "@/components/productCart";
import ProductSearchForm from "@/components/searchForm";
import { GitCompareArrows, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function PublicMainMenu() {
    return (
        <div className="py-4">
            <div className="my-container">
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Image
                            src={"/logo.svg"}
                            alt="My logo"
                            width={160}
                            height={60}
                        />
                    </Link>
                    <ProductSearchForm />
                    <div>
                        <div className="flex gap-x-12">
                            <Link href={"/"} className="flex flex-col justify-center items-center">
                                <GitCompareArrows size={22} />
                                <span className="text-xs">Compare</span>
                            </Link>

                            <Link href={"/"} className="flex flex-col justify-center items-center">

                                <Heart size={22} />
                                <span className="text-xs">Wishlist</span>
                            </Link>
                            <ProductCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublicMainMenu;