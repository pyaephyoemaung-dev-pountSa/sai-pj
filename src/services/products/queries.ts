import type { IProduct } from "#/types"
import { useQuery } from "@tanstack/react-query"
import api from "../api"

const getProducts = async (tab: string) =>
{
    const response = await api.get<{
        products : IProduct[]
    }>(tab === 'all' ? 'products' : `products/category/${tab}`)
    return response.data
}
export const useProductsQuery = (tab:string) =>
{
   return useQuery({
        queryKey: ['products', tab],
        queryFn: () => getProducts(tab),
        select:(data) => data.products
    })
}
const getProductById = async (id: string)=>{
    const response = await api.get<IProduct>(`products/${id}`)
    return response.data
}
export const getProductByIdQuery = (id: string) =>
{
    useQuery({
        queryKey: ['product', id],
        queryFn:()=>getProductById(id)
    })
}