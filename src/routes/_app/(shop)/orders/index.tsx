import OrderPage from '#/pages/orders'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/(shop)/orders/')({
  component: OrderPage,
})

