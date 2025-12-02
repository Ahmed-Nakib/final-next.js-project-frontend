import { ShoppingCart } from "lucide-react";
import Link from "next/link";

function ProductCart() {
    return (
        <div>
            <Link href={"/"} className="flex flex-col justify-center items-center">
                <ShoppingCart size={22} />
                <span className="text-xs">Cart</span>
            </Link>
        </div>
    );
}

export default ProductCart;