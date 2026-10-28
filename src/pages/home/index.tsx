import type { IProduct } from "#/types"
import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "@tanstack/react-router";

const HomePage = () =>
{
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() =>
    {
        (async () =>
        {
            const response = await axios.get< {
                products:IProduct[]
            }>(' https://dummyjson.com/products')
            setProducts(response.data.products)
        })()
    }, [])
    console.log(products)
        return (
            <div className="max-w-6xl mx-auto mt-8 grid grid-cols-4 gap-6">
                {products.map((p) => (
                    <div className="" key={p.id}>
                        <Link to="/products/$productId" params={{ productId: `${p.id}` }}>
                            <div className="flex flex-col justify-between">
                                <img src={p.thumbnail} alt="" className="bg-blue-100 rounded-4xl" />
                                <div className="grid grid-cols-2 flex justify-between mt-4">
                                    <ul>
                                        <li>rate {p.rating}</li>
                                        <li className="font-bold text-balance">{p.title}</li>
                                        <li className="font-bold">{p.price}</li>
                                    </ul>
                                    <button>+</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
        </div>
    )
}
export default HomePage;