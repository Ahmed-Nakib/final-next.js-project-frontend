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

function ShopPage() {
    return ( 
        <>
          <PageBreadCrumb pages={page}/>
        </>
     );
}

export default ShopPage;