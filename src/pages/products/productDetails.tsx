import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "#/components/ui/breadcrumb";
import { Link } from "@tanstack/react-router";

const productDetails = () =>
{
    return (
        <Breadcrumb className="max-w-6xl mx-auto mt-8">
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="#link-component" to={"/"}>Shop</Link>} />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
    )
}
export default productDetails;