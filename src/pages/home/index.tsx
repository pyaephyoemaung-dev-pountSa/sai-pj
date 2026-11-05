
import { useState } from "react"
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { SquarePlus, Star } from "lucide-react"
import Hero from "../../components/Layouts/hero";
import { IconStarFilled } from '@tabler/icons-react';

import { useProductsQuery } from "#/services/products/queries";
import { Categories } from "./components/categories";


const HomePage = () =>
{
    const search = useSearch({from:"/_app"})
    const navigate = useNavigate();
    const [tab, setTab] = useState(search.category)
    const {data} = useProductsQuery(tab)
    console.log(data)
    const handleCategory = (e: string) =>
    {
        setTab(e)
        navigate({
            to: '/',
            search: { category: e },
            resetScroll:false
        })
    }

    return (<>
        <Hero />
        <Categories tab={tab} handleCategory={handleCategory}/>
            <div className="max-w-6xl mx-auto rounded-2xl mt-8 grid grid-cols-5 gap-6 h-125 overflow-y-scroll mb-14">
                {data?.map((p) => (
                    <div className="" key={p.id}>
                        <Link to="/products/$productId" params={{ productId: `${p.id}`}} search={{ category: p.category}}>
                            <div className="flex flex-col justify-between">
                                <img src={p.thumbnail} alt="" className="bg-blue-100 rounded-xl h-52 shadow-lg shadow-[#eeeaea]" />
                                <div className="flex justify-between mt-4 mx-3">
                                    <ul className="flex flex-col text-balance">
                                        <li className="flex items-center gap-2"><IconStarFilled className="size-4.5" /> {p.rating}</li>
                                        <li className=" text-balance">{p.title}</li>
                                        <li className="">{p.price}</li>
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