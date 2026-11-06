import type z from "zod";
import type { pdt } from "./schema";

export interface ICartItem
{
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    quantity: number;
    image: string;
    color: string;
    size: string;
    stock: number;
}
export type productType = z.infer<typeof pdt>