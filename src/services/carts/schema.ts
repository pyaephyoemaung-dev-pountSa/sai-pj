import z from "zod";

export const pdt = z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    category: z.string(),
    stock: z.number(),
    thumbnail: z.string(),
    quantity: z.number().default(1),
})
