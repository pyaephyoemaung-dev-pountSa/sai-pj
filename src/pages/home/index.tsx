import type { IProduct } from "#/types"
import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "@tanstack/react-router";
import { SquarePlus } from "lucide-react"
import Hero from "../../components/Layouts/hero";
import { Tabs, TabsList, TabsTrigger } from "#/components/ui/tabs";

const HomePage = () =>
{
    type Tab = "all";
    const [products, setProducts] = useState<IProduct[]>([])
    const categories = ["beauty", "fragrances", "furniture", "groceries"]
    const [tab, setTab] = useState<Tab>("all");
    useEffect(() =>
    {
        (async () =>
        {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            const url = tab === "all" ? "https://dummyjson.com/products" : `https://dummyjson.com/products/category/${tab}`;
            const { data } = await axios.get<{ products: IProduct[] }>(url);
            console.log(data)
            setProducts(data.products);
        })()
    }, [tab])
    console.log(products.map((p)=>p.category))
    return (<>
        <Hero />
        <Tabs value={tab} onValueChange={(v)=>setTab(v as Tab)} className="max-w-6xl mx-auto mt-8">
            <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((c) => (
                    <TabsTrigger key={c} value={c}>
                 {c}
                  </TabsTrigger>
                 ))}
            </TabsList>
        </Tabs>
            <div className="max-w-6xl mx-auto mt-8 grid grid-cols-4 gap-6">
                {products.map((p) => (
                    <div className="" key={p.id}>
                        <Link to="/products/$productId" params={{ productId: `${p.id}` }}>
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