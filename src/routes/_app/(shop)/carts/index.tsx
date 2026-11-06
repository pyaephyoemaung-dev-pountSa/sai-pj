import CartPage from '#/pages/carts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/(shop)/carts/')({
  component: CartPage,
})

