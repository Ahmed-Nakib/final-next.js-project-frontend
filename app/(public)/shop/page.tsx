import ProductFilterTop from "@/components/pages/shop/productFilterTop";
import PageBreadCrumb from "@/components/share/pageBreadCrumb";
import { IBreadCrumb } from "@/type/type";

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
          <PageBreadCrumb pages={page}/>
          <ProductFilterTop />
          {filter}
        </>
     );
}

export default ShopPage;