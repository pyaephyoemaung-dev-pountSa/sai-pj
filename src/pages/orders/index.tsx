import { Button } from "#/components/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "#/components/ui/empty"
import { Link } from "@tanstack/react-router"

const OrderPage = () =>
{
    return (
        <>
        <Empty className="border border-dashed">
        <EmptyHeader>
            <EmptyTitle>No Order Yet !</EmptyTitle>
            <EmptyDescription>
            take some order from shop
            </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
                <Button variant="outline" size="sm">
            <Link to={'/'}>Go to Shop</Link>
            </Button>
        </EmptyContent>
        </Empty>
        </>
    )
}
export default OrderPage