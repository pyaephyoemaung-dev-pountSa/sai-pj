import type { productType } from "#/services/carts/type";
import { create } from "zustand";

export interface ICartStore
{
    cartItems: productType[];
    addCartItem: (product: productType) => void;
    clearCartItems: () =>void
}
export default create<ICartStore>((set) =>
{
    return {
        cartItems: [],
        addCartItem: (product: productType) =>
        {
            set((state) => ({ cartItems: [...state.cartItems, product] }))
        },
        clearCartItems: () =>
        {
            set({ cartItems: [] })
        }
    }
})