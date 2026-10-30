
import { useState } from "react"
import { Link, useNavigate } from "@tanstack/react-router";
import { SquarePlus } from "lucide-react"
import Hero from "../../components/Layouts/hero";

import { useProductsQuery } from "#/services/products/queries";
import { Categories } from "./components/categories";


const HomePage = () =>
{
    const navigate = useNavigate();
    const [tab, setTab] = useState('all')
    const {data} = useProductsQuery(tab)
    console.log(data)
    const handleCategory = (e: string) =>
    {
        setTab(e)
        navigate({
            to: '/',
            search: {category:e},
        })
    }

    return (<>
        <Hero />
        <Categories tab={tab} handleCategory={handleCategory}/>
            <div className="max-w-6xl mx-auto mt-8 grid grid-cols-4 gap-6">
                {data?.map((p) => (
                    <div className="" key={p.id}>
                        <Link to="/products/$productId" params={{ productId: `${p.id}`}}>
                            <div className="flex flex-col justify-between">
                                <img src={p.thumbnail} alt="" className="bg-blue-100 rounded-4xl" />
                                <div className="flex justify-between mt-4 mx-3">
                                    <ul className="flex flex-col text-balance">
                                        <li>rate {p.rating}</li>
                                        <li className="font-bold text-balance">{p.title}</li>
                                        <li className="font-bold">{p.price}</li>
                                    </ul>
                                    <button className=""><SquarePlus/></button>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
        </div>
        </>
    )
}
 export default HomePage;