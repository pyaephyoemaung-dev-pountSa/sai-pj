import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "#/components/ui/breadcrumb";
import { Label } from "#/components/ui/label";
import { getProductByIdQuery } from "#/services/products/queries";
import { Route, useNavigate, useParams, useRouter, useSearch } from "@tanstack/react-router";
import { Star, StarHalf } from "lucide-react";
import RatingCard from "../home/components/ratingCard";
import ReviewCard from "../home/components/reviewCard";
import { useEffect, useState  } from "react";
import type {ComponentProps} from "react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { toast } from "sonner";
import useCartStore from "#/stores/useCartStore";

const productDetails = () =>
{

    const search = useSearch({ from: "/_app/(shop)/products/$productId" })
    const router = useRouter()
    const { productId } = useParams({ from: "/_app/(shop)/products/$productId" })
    const { data } = getProductByIdQuery(productId)
    const navigate = useNavigate()
    const [count, setCount] = useState<number>(1)
    const { addCartItem } = useCartStore()
    const [previewImg, setPreviewImg] = useState('')
    useEffect(() =>
    {
        if (data?.images.length)
        {
            setPreviewImg(data.images[0])
        }
    },[data?.images])

    const handleImg = (img: string) =>
    {
        setPreviewImg(img)
    }


    const handleIncrese = () =>
    {
        setCount(count + 1)
    }
    const handleDecrese = () =>
    {
        if (count > 1)
        {
            setCount(count - 1)
        }
    }
    const addToCart = () =>
    {
        toast.success(`${data?.title} is added to cart.`)
        if (data?.id)
        {
            addCartItem({ ...data, quantity: count })
        }
        // navigate({
            // to:'/carts'
        // })
    }

    return (
        <>
        <Breadcrumb className="max-w-6xl mx-auto mt-8">
        <BreadcrumbList>
            <BreadcrumbItem>
            <button onClick={() =>
            {
                router.history.back()
            }}>Shop</button>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbPage>{search.category}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
            </Breadcrumb>
            <div className="grid grid-cols-2 max-w-6xl mx-auto mt-8 gap-4">
                <div className=""><img src={previewImg} className="size-90 bg-blue-100 rounded-xl" />
                <div className="flex items-center gap-2 my-4">
                {data?.images.map((img, idx) => (
                    <img
                    onClick={() => handleImg(img)}
                    key={idx}
                    src={img}
                    className={`size-20 border bg-blue-100 rounded-xl ${img === previewImg && 'border-blue-500'} `}
                    />
                ))}
        </div>
                </div>
                <div className="gap-6 flex flex-col">
                    <span className="text-sm text-balance">{data?.brand}</span>
                    <Label className="text-2xl font-bold">{data?.title}</Label>
                    <RatingCard rating={data?.rating || 0}/>
                    <p className="text-lg">${data?.price.toFixed(2)}</p>
                    <p>{data?.description}</p>
                    <Label><IconCircleCheckFilled className="text-blue-400 size-4"/> In stock, {data?.stock} left</Label>
                    <div className="flex gap-4 items-center">
                        <div className="border-2 rounded-full flex items-center">
                            <Button onClick={handleDecrese} title="-"/>
                            <span className="px-4 py-2">{count}</span>
                            <Button disabled={count === (data?.stock || 0)} onClick={handleIncrese} title="+"/>
                        </div>
                        <button onClick={addToCart} className="bg-blue-500 text-white px-4 py-2 rounded-full w-full">Add to cart ${((data?.price || 0) * count).toFixed(2)}</button>
                    </div>
                    <ul>
                        <li className="flex justify-between"><span className="text-gray-500">SKU</span><span>{data?.sku}</span></li>
                    </ul>
                </div>
            </div>
            {/* <ReviewCard review={data?.reviews} className="max-w-6xl mx-auto mt-8 gap-6"/> */}
        </>
        
    )
}
interface ButtonProps
{
    onClick: () => void
    title: string
}
const Button = ({onClick,title}: ButtonProps & ComponentProps<"button">) =>
{
    return (
        <button onClick={onClick} className="text-black px-3.5 py-2 rounded-lg">{title}</button>
    )
}
export default productDetails;