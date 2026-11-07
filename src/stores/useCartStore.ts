import type { productType } from "#/services/carts/type";
import { create } from "zustand";

export interface ICartStore
{
    cartItems: productType[];
    addCartItem: (product: productType) => void;
    removeCartItem: (id: number) => void;
    updateCartItemQuantity: (id: number, quantity: number) => void;
    clearCartItems: () => void;
}
export default create<ICartStore>((set) =>
{
    return {
        cartItems: [],
        addCartItem: (product: productType) =>
        {
            set((state) =>
            {
                const existingItem = state.cartItems.find((item) => item.id === product.id);
                if (existingItem)
                {
                    return {
                        cartItems: state.cartItems.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: Math.min(item.stock, item.quantity + product.quantity) }
                                : item
                        ),
                    };
                }

                return {
                    cartItems: [...state.cartItems, {
                        ...product,
                        quantity: Math.min(product.stock, Math.max(1, product.quantity)),
                    }],
                };
            })
        },
        removeCartItem: (id: number) =>
        {
            set((state) => ({
                cartItems: state.cartItems.filter((item) => item.id !== id),
            }))
        },
        updateCartItemQuantity: (id: number, quantity: number) =>
        {
            set((state) => ({
                cartItems: state.cartItems.map((item) =>
                    item.id === id
                        ? { ...item, quantity: Math.min(item.stock, Math.max(1, quantity)) }
                        : item
                ),
            }))
        },
        clearCartItems: () =>
        {
            set({ cartItems: [] })
        }
    }
})